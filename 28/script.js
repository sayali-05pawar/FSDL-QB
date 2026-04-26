// Subjects
const subjects = ['Math', 'Science', 'English', 'Computer'];

// BAR CHART (Marks)
new Chart(document.getElementById('marksChart'), {
    type: 'bar',
    data: {
        labels: subjects,
        datasets: [{
            label: 'Marks',
            data: [85, 78, 90, 88],
            backgroundColor: ['red', 'blue', 'green', 'orange']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// LINE CHART (Attendance % over weeks)
new Chart(document.getElementById('attendanceChart'), {
    type: 'line',
    data: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4'],
        datasets: [{
            label: 'Attendance %',
            data: [90, 85, 88, 92],
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// PIE CHART (Progress Distribution)
new Chart(document.getElementById('progressChart'), {
    type: 'pie',
    data: {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['green', 'orange', 'red']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});