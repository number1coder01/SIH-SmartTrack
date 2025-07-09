
var map = L.map('map').setView([28.6139, 77.2090], 10); // Default view is centered on New Delhi


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);


async function getCoordinates(location) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
    const data = await response.json();
    return [data[0].lat, data[0].lon];
}


async function getRoute(startCoords, endCoords) {
    const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${startCoords[1]},${startCoords[0]};${endCoords[1]},${endCoords[0]}?overview=full&geometries=geojson`);
    const data = await response.json();
    return data.routes[0].geometry;
}


document.getElementById('route-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    
    try {
        const startCoords = await getCoordinates(start);
        const endCoords = await getCoordinates(end);
        const route = await getRoute(startCoords, endCoords);

        
        var routeLayer = L.geoJSON(route, {
            style: function () {
                return {color: "#3887be", weight: 5};
            }
        }).addTo(map);

      
        map.fitBounds(routeLayer.getBounds());

    } catch (error) {
        alert('Error: ' + error.message);
    }
});
