// script.js

// Dummy data for bus routes and their corresponding route images
const busRoutes = {
    'bus764': 'images/764.webp',
    'bus578': 'images/578.webp',
    'bus918': 'images/918.webp',
    'bus727': 'images/727.webp'
    // Add more routes and images as needed
};

let map;
let liveLocationMarker = null; // To store the live location marker

// Initialize and add the map
function initMap() {
    // Set a default location (e.g., New York City)
    const defaultLocation = { lat: 40.7128, lng: -74.0060 };

    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 12,
        styles: [ // Optional: Add custom map styling
            { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] }
        ]
    });

    // Add a marker for the default location
    new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: 'Default Location'
    });
}

// Handle DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map (in case the API hasn't called initMap yet)
    if (typeof google !== 'undefined') {
        initMap();
    }

    const routeSelect = document.getElementById('route-select');
    const routeImageDiv = document.getElementById('route-image');
    const busRouteInput = document.getElementById('bus-route-input');
    const viewLocationBtn = document.getElementById('view-location-btn');
    const liveLocationStatus = document.getElementById('live-location-status');

    // Handle dropdown selection to show route images
    routeSelect.addEventListener('change', function() {
        // Clear any previously displayed images
        routeImageDiv.innerHTML = '';

        const selectedRoute = routeSelect.value;
        if (selectedRoute && busRoutes[selectedRoute]) {
            const img = document.createElement('img');
            img.src = busRoutes[selectedRoute];
            img.alt = `Route Map for ${selectedRoute}`;
            img.style.maxHeight = '280px'; // Adjusted height
            img.style.maxWidth = '280px';  // Adjusted width
            img.style.objectFit = 'contain';
            routeImageDiv.appendChild(img);
        }
    });

    // Handle Live Location Button Click
    viewLocationBtn.addEventListener('click', function() {
        const route = busRouteInput.value.trim();
        if (route) {
            // Placeholder: In a real application, fetch live location data from a server
            // For demonstration, we'll use a random location near the default location
            const liveLat = 40.7128 + (Math.random() - 0.5) * 0.1; // ±0.05 degrees
            const liveLng = -74.0060 + (Math.random() - 0.5) * 0.1;

            const liveLocation = { lat: liveLat, lng: liveLng };

            // Remove existing marker if any
            if (liveLocationMarker) {
                liveLocationMarker.setMap(null);
            }

            // Add a new marker for live location
            liveLocationMarker = new google.maps.Marker({
                position: liveLocation,
                map: map,
                title: `Live Location for ${route}`,
                icon: {
                    url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                }
            });

            // Center the map to the live location
            map.setCenter(liveLocation);

            // Update the status message
            liveLocationStatus.textContent = `Live location for ${route} is displayed on the map.`;
        } else {
            liveLocationStatus.textContent = 'Please enter a bus route.';
        }
    });
});
