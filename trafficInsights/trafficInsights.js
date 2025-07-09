// Function to render traffic charts
window.onload = function() {
    // Current Traffic Flow Chart
    var ctx1 = document.getElementById('currentTrafficChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '1:00', '2:00', '3:00'],
            datasets: [{
                label: 'Traffic Flow (Vehicles per Hour)',
                data: [50, 70, 90, 120, 110, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Historical Traffic Data Chart
    var ctx2 = document.getElementById('historicalTrafficChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Average Traffic Flow (Vehicles per Hour)',
                data: [80, 90, 100, 95, 85, 70, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Congestion Prediction Chart
    var ctx3 = document.getElementById('congestionPredictionChart').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Low Congestion', 'Moderate Congestion', 'High Congestion'],
            datasets: [{
                label: 'Congestion Predictions',
                data: [60, 25, 15],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });
};
