// Common labels
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// LINE CHART (Temperature)
new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'Temperature (°C)',
            data: [30, 32, 31, 29, 28, 27, 26],
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// BAR CHART (Rainfall)
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Rainfall (mm)',
            data: [5, 10, 1, 20, 15, 8, 12],
            backgroundColor: 'green'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// PIE CHART (Weather Type)
new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: ['Sunny', 'Rainy', 'Cloudy'],
        datasets: [{
            data: [3, 2, 2],
            backgroundColor: ['orange', 'blue', 'gray']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});