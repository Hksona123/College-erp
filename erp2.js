// // You can use JavaScript to interact with your data and update the front-end dynamically
// // Example: Update attendance stats based on real data
// const totalPresentElement = document.getElementById('total-present');
// const totalAbsentElement = document.getElementById('total-absent');
// const totalPercentageElement = document.getElementById('total-percentage');

// // Replace these with actual data from your backend
// const totalPresent = 120;
// const totalAbsent = 10;
// const totalPercentage = ((totalPresent / (totalPresent + totalAbsent)) * 100).toFixed(2) + '%';

// totalPresentElement.textContent = totalPresent;
// totalAbsentElement.textContent = totalAbsent;
// totalPercentageElement.textContent = totalPercentage;


//     // Sample attendance data
//     const totalPresent = 80;
//     const totalAbsent = 20;

//     // Calculate percentages
//     const presentPercentage = (totalPresent / (totalPresent + totalAbsent)) * 100;
//     const absentPercentage = 100 - presentPercentage;

//     // Get the canvas element
//     const canvas = document.getElementById('attendanceChart');

//     // Create a pie chart
//     const ctx = canvas.getContext('2d');
//     new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             labels: ['Present', 'Absent'],
//             datasets: [{
//                 data: [presentPercentage, absentPercentage],
//                 backgroundColor: ['#36A2EB', '#FF6384'],
//             }],
//         },
//         options: {
//             legend: {
//                 position: 'bottom',
//             },
//         },
//     });





    // document.getElementById('toggle-sidebar').addEventListener('click', function () {
    //     const sidebar = document.querySelector('.sidebar');
    //     const bars = document.querySelectorAll('.bar');
    
    //     if (sidebar.style.left === '-250px') {
    //         sidebar.style.left = '0';
    //         bars.forEach(bar => bar.style.transform = 'rotate(-45deg)');
    //     } else {
    //         sidebar.style.left = '-250px';
    //         bars.forEach(bar => bar.style.transform = 'rotate(0)');
    //     }
    // });
    
    // document.querySelector('.sidebar').addEventListener('mouseleave', function () {
    //     const sidebar = document.querySelector('.sidebar');
    //     const bars = document.querySelectorAll('.bar');
    //     if (sidebar.style.left === '0') {
    //         sidebar.style.left = '-250px';
    //         bars.forEach(bar => bar.style.transform = 'rotate(0)');
    //     }
    // });
    


    // JavaScript code for your College ERP website

// // This code controls the sidebar toggle
// document.getElementById('toggle-sidebar').addEventListener('click', function () {
//     const sidebar = document.querySelector('.sidebar');
//     const bars = document.querySelectorAll('.bar');

//     if (sidebar.style.left === '-250px') {
//         sidebar.style.left = '0';
//         bars.forEach(bar => bar.style.transform = 'rotate(-45deg)');
//     } else {
//         sidebar.style.left = '-250px';
//         bars.forEach(bar => bar.style.transform = 'rotate(0)');
//     }
// });

// // Sample attendance data for the pie chart
// const totalPresent = 100;
// const totalAbsent = 20;

// // Calculate percentages
// const presentPercentage = (totalPresent / (totalPresent + totalAbsent)) * 100;
// const absentPercentage = 100 - presentPercentage;

// // Get the pie chart canvas element
// const canvas = document.getElementById('attendanceChart');

// // Create a pie chart using Chart.js
// const ctx = canvas.getContext('2d');
// new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Present', 'Absent'],
//         datasets: [{
//             data: [presentPercentage, absentPercentage],
//             backgroundColor: ['#36A2EB', '#FF6384'],
//         }],
//     },
//     options: {
//         legend: {
//             position: 'bottom',
//         },
//     },
// });





// JavaScript code for your College ERP website

// This code controls the sidebar toggle
document.getElementById('toggle-sidebar').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const bars = document.querySelectorAll('.bar');

    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        bars.forEach(bar => bar.style.transform = 'rotate(-45deg)');
    } else {
        sidebar.style.left = '-250px';
        bars.forEach(bar => bar.style.transform = 'rotate(0)');
    }
});

// This code closes the sidebar when the cursor moves away from it
document.querySelector('.sidebar').addEventListener('mouseleave', function () {
    const sidebar = document.querySelector('.sidebar');
    const bars = document.querySelectorAll('.bar');
    if (sidebar.style.left === '0') {
        sidebar.style.left = '-250px';
        bars.forEach(bar => bar.style.transform = 'rotate(0)');
    }
});

// Sample attendance data for the pie chart
const totalPresent = 100;
const totalAbsent = 20;

// Calculate percentages
const presentPercentage = (totalPresent / (totalPresent + totalAbsent)) * 100;
const absentPercentage = 100 - presentPercentage;

// Get the pie chart canvas element
const canvas = document.getElementById('attendanceChart');

// Create a pie chart using Chart.js
const ctx = canvas.getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            data: [presentPercentage, absentPercentage],
            backgroundColor: ['#36A2EB', '#FF6384'],
        }],
    },
    options: {
        legend: {
            position: 'bottom',
        },
    },
});
