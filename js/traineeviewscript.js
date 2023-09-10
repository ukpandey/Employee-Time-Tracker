document.addEventListener("DOMContentLoaded", function() {
    // Generate random data for the pie chart
    const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
    const data = labels.map(() => Math.floor(Math.random() * 100));

    // Get the canvas element
    const ctx = document.getElementById("myPieChart").getContext("2d");

    // Create a new pie chart
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4CAF50",
                    "#E91E63",
                ],
            }],
        },
    });
});


function showEmployeeInfo() {
        document.getElementById("employeeInfo").style.display = "block";
    }
 function hideEmployeeInfo() {
        document.getElementById("employeeInfo").style.display = "none";
    }