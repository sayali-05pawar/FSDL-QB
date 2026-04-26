const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',   // change to 'doughnut' if needed
    data: {
        labels: ['Present', 'Absent', 'Leave'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: ['green', 'red', 'orange']
        }]
    }
});