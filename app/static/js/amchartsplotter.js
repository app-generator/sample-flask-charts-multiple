
const headers = {
    headers: {'Content-Type': 'application/json'}
}


fetch("/api/MonthlyCustomers", {
  method: "GET",
  headers: headers
  }).then(response => response.json())
  .then(data => {
                 
                  var root = am5.Root.new("linechart");
                  var chart = root.container.children.push( 
                    am5xy.XYChart.new(root, {
                      panY: false,
                      layout: root.verticalLayout
                    }) 
                  );
  
           
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
                      categoryField: "month_name"
                    })
                  );
                  xAxis.data.setAll(data['data']);
  
                  // Create series
                  var series = chart.series.push( 
                    am5xy.LineSeries.new(root, { 
                      name: "Customer Count", 
                      xAxis: xAxis, 
                      yAxis: yAxis, 
                      valueYField: "customer_count", 
                      categoryXField: "month_name",
                      tooltip: am5.Tooltip.new(root, {
                        labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}"
                      })
                    }) 
                  );
                  series.data.setAll(data['data']);
  
    
  
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
                 
                // Create root and chart
                var root = am5.Root.new("barchart"); 
                var chart = root.container.children.push( 
                  am5xy.XYChart.new(root, {
                    panY: false,
                    layout: root.verticalLayout
                  }) 
                );

         
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
                    categoryField: "month_name"
                  })
                );
                xAxis.data.setAll(data['data']);

                // Create series
                var series = chart.series.push( 
                  am5xy.ColumnSeries.new(root, { 
                    name: "Sale", 
                    xAxis: xAxis, 
                    yAxis: yAxis, 
                    valueYField: "sale", 
                    categoryXField: "month_name",
                    tooltip: am5.Tooltip.new(root, {
                      labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}"
                    })
                  }) 
                );
                series.data.setAll(data['data']);

  

                // Add legend
                var legend = chart.children.push(am5.Legend.new(root, {})); 
                legend.data.setAll(chart.series.values);

                // Add cursor
                chart.set("cursor", am5xy.XYCursor.new(root, {}));
              
              });




fetch("/api/ProductSales", {
            method: "GET",
            headers: headers
            }).then(response => response.json())
            .then(data => {
                      // Create root and chart
                      var root = am5.Root.new("piechart");

                      root.setThemes([
                        am5themes_Animated.new(root)
                      ]);

                      var chart = root.container.children.push( 
                        am5percent.PieChart.new(root, {
                          layout: root.verticalLayout
                        }) 
                      );
                      
                      // Create series
                      var series = chart.series.push(
                        am5percent.PieSeries.new(root, {
                          name: "Sale by product",
                          valueField: "sale",
                          categoryField: "product",
                          alignLabels: false
                          
                        })
                      );
                      series.data.setAll(data['data']);
                      series.labels.template.setAll({
                        fontSize: 12,
                        text: "{category}",
                        textType: "adjusted",
                        radius: 10
                      })

});  