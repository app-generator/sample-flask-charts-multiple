const headers = {
    headers: {'Content-Type': 'application/json'}
}
fetch("/api/MonthlyCustomers", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        const x = data['data'].map(function(d){ return d['month_name']})
                        const y = data['data'].map(function(d){ return d['customer_count']})
                        // Create root and chart
                        var root = am5.Root.new("linechart"); 
                        var chart = root.container.children.push( 
                        am5xy.XYChart.new(root, {
                            panY: false,
                            layout: root.verticalLayout
                        }) 
                        );

                        // Define data
                        var data = [{ 
                        category: "Research", 
                        value1: 1000, 
                        value2: 588 
                        }, { 
                        category: "Marketing", 
                        value1: 1200, 
                        value2: 1800 
                        }, { 
                        category: "Sales", 
                        value1: 850, 
                        value2: 1230 
                        }];

                        // Craete Y-axis
                        var yAxis = chart.yAxes.push( 
                        am5xy.ValueAxis.new(root, { 
                            renderer: am5xy.AxisRendererY.new(root, {}) 
                        }) 
                        );

                        // Create X-Axis
                        var xAxis = chart.xAxes.push(
                        am5xy.CategoryAxis.new(root, {
                            renderer: am5xy.AxisRendererX.new(root, {}),
                            categoryField: "category"
                        })
                        );
                        xAxis.data.setAll(data);

                        // Create series
                        var series1 = chart.series.push( 
                        am5xy.ColumnSeries.new(root, { 
                            name: "Series", 
                            xAxis: xAxis, 
                            yAxis: yAxis, 
                            valueYField: "value1", 
                            categoryXField: "category" 
                        }) 
                        );
                        series1.data.setAll(data);

                        var series2 = chart.series.push( 
                        am5xy.ColumnSeries.new(root, { 
                            name: "Series", 
                            xAxis: xAxis, 
                            yAxis: yAxis, 
                            valueYField: "value2", 
                            categoryXField: "category" 
                        }) 
                        );
                        series2.data.setAll(data);

                        // Add legend
                        var legend = chart.children.push(am5.Legend.new(root, {})); 
                        legend.data.setAll(chart.series.values);

                        // Add cursor
                        chart.set("cursor", am5xy.XYCursor.new(root, {}));
                        

                        
                    });
////////////////////////////
fetch("/api/MonthlySales", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        const x = data['data'].map(function(d){ return d['month_name']});
                        const y = data['data'].map(function(d){ return d['sale']});

                        const chart_data = {
                            labels: x,
                            datasets: [{
                            label: 'Monthly Sales',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: y,
                            }]
                        };
                        const config = {
                            type: 'bar',
                            data: chart_data,
                            options: {}
                        };
                        const monthlySales = new Chart(
                            document.getElementById('barchart'),
                            config
                        );
                        console.log(config)
                    });


fetch("/api/ProductSales", {
            method: "GET",
            headers: headers
            }).then(response => response.json())
            .then(data => {
                            const x = data['data'].map(function(d){ return d['product']})
                            const y = data['data'].map(function(d){ return d['sale']})
                            
                            const chart_data = {
                                labels: x,
                                datasets: [{
                                label: 'Sale',
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)',
                                    'rgb(150, 205, 86)',
                                    'rgb(210, 70, 110)',
                                    'rgb(54, 162, 200)',
                                    'rgb(220, 150, 86)',
                                    'rgb(150, 205, 86)',
                                    
                                  ],
                                data: y,
                                }]
                            };
                            const config = {
                                type: 'pie',
                                data: chart_data,
                                options: {}
                            };
                            const monthlySales = new Chart(
                                document.getElementById('piechart'),
                                config
                            );
                            console.log(config)
                        });  