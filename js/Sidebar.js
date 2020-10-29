var data = {
        labels: ["Houses sold", "Pending", "Goal"],
        datasets: [{
            data: [23, 12, 43],
            backgroundColor: [
                "#71A7EF",
                "#A32C6A",
                "#FFFFFF"
            ],
            borderColor: "transparent"
        }]
    };

    var options = {
        startAngle: -Math.PI,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
            // position: 'right'

        },

    };

var ctx = $("#pie-chart");
new Chart(ctx, {
        data: data,
        type: 'pie',
        options: options
    });
