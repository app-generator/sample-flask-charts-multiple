
const headers = {
    headers: {'Content-Type': 'application/json'}
}

am5.ready(function() {
  console.log("Ready");
        // Create root and chart
        var root = am5.Root.new("barchart"); 
        var chart = root.container.children.push( 
          am5xy.XYChart.new(root, {
            panY: false,
            layout: root.verticalLayout
          }) 
        );

        // Define data
        var adata = [{ 
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
        xAxis.data.setAll(adata);

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
        series1.data.setAll(adata);

        var series2 = chart.series.push( 
          am5xy.ColumnSeries.new(root, { 
            name: "Series", 
            xAxis: xAxis, 
            yAxis: yAxis, 
            valueYField: "value2", 
            categoryXField: "category" 
          }) 
        );
        series2.data.setAll(adata);

        // Add legend
        var legend = chart.children.push(am5.Legend.new(root, {})); 
        legend.data.setAll(chart.series.values);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
});

fetch("/api/MonthlySales", {
  method: "GET",
  headers: headers
  }).then(response => response.json())
  .then(data => {
                  const x = data['data'].map(function(d){ return d['month_name']});
                  const y = data['data'].map(function(d){ return d['sale']});
                // Create root and chart
                var root = am5.Root.new("piechart"); 
                var chart = root.container.children.push( 
                  am5xy.XYChart.new(root, {
                    panY: false,
                    layout: root.verticalLayout
                  }) 
                );

                // Define data
                var adata = [{ 
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
                xAxis.data.setAll(adata);

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
                series1.data.setAll(adata);

                var series2 = chart.series.push( 
                  am5xy.ColumnSeries.new(root, { 
                    name: "Series", 
                    xAxis: xAxis, 
                    yAxis: yAxis, 
                    valueYField: "value2", 
                    categoryXField: "category" 
                  }) 
                );
                series2.data.setAll(adata);

                // Add legend
                var legend = chart.children.push(am5.Legend.new(root, {})); 
                legend.data.setAll(chart.series.values);

                // Add cursor
                chart.set("cursor", am5xy.XYCursor.new(root, {}));
              
              });
fetch("/api/MonthlyCustomers", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        console.log("Data loaded")

                        const x = data['data'].map(function(d){ return d['month_name']})
                        const y = data['data'].map(function(d){ return d['customer_count']})
                        var root = am5.Root.new("linechart");
                        var chart = root.container.children.push(
                                    am5xy.XYChart.new(root, {})
                        );
                        var yAxis = chart.yAxes.push(
                            am5xy.ValueAxis.new(root, {
                              renderer: am5xy.AxisRendererY.new(root, {})
                            })
                          );
                        var xAxis = chart.xAxes.push(
                            am5xy.CategoryAxis.new(root, {
                              renderer: am5xy.AxisRendererX.new(root, {}),
                              categoryField: "month_name"
                            })
                          );
                        xAxis.data.setAll(data['data'])
                        yAxis.data.setAll(data['data'])
                        var series = chart.series.push(
                            am5xy.ColumnSeries.new(root, {
                              name: "Series",
                              xAxis: xAxis,
                              yAxis: yAxis,
                              valueYField: "month_name",
                              valueXField: "customer_count"
                            })
                          );
                        
                    });
////////////////////////////



fetch("/api/ProductSales", {
            method: "GET",
            headers: headers
            }).then(response => response.json())
            .then(data => {
                            const x = data['data'].map(function(d){ return d['product']})
                            const y = data['data'].map(function(d){ return d['sale']})
                            
               
                        });  