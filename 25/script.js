const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CSE', 'IT', 'Mechanical', 'Civil'],
        datasets: [{
            label: 'Number of Students',
            data: [50, 40, 30, 20],
            backgroundColor: ['red', 'blue', 'green', 'orange']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});