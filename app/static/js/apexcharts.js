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
                        var options = {
                            chart: {
                              type: 'line'
                            },
                            series: [{
                              name: 'Customer count',
                              data: y
                            }],
                            xaxis: {
                              categories: x
                            }
                          }
                          var chart = new ApexCharts(document.getElementById("linechart"), options);

                          chart.render();
                    });

fetch("/api/MonthlySales", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        const x = data['data'].map(function(d){ return d['month_name']});
                        const y = data['data'].map(function(d){ return d['sale']});
                        var options = {
                            chart: {
                              type: 'bar'
                            },
                            series: [{
                              name: 'Sales',
                              data: y
                            }],
                            xaxis: {
                              categories: x
                            }
                          }
                          var chart = new ApexCharts(document.getElementById("barchart"), options);

                          chart.render();
                        
                    });


fetch("/api/ProductSales", {
            method: "GET",
            headers: headers
            }).then(response => response.json())
            .then(data => {
                            const x = data['data'].map(function(d){ return d['product']})
                            const y = data['data'].map(function(d){ return d['sale']})
                            var options = {
                                series: y,
                                chart: {
                                width: 380,
                                type: 'pie',
                              },
                              labels: x,
                              responsive: [{
                                breakpoint: 480,
                                options: {
                                  chart: {
                                    width: 200
                                  },
                                  legend: {
                                    position: 'bottom'
                                  }
                                }
                              }]
                              };
                              var chart = new ApexCharts(document.getElementById("piechart"), options);
    
                              chart.render();
                            
                        });  