
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
                        var data = {
                            // A labels array that can contain any sort of values
                            labels: x,
                            // Our series array that contains series objects or in this case series data arrays
                            series: [
                              y
                            ]
                          };
                        new Chartist.Line('.ct-line', data);
                    });


fetch("/api/MonthlySales", {
    method: "GET",
    headers: headers
    }).then(response => response.json())
    .then(data => {
                    const x = data['data'].map(function(d){ return d['month_name']});
                    const y = data['data'].map(function(d){ return d['sale']});
                    var data = {
                        // A labels array that can contain any sort of values
                        labels: x,
                        // Our series array that contains series objects or in this case series data arrays
                        series: [
                          y
                        ]
                      };
                    new Chartist.Bar('.ct-bar', data);
                    
                });


fetch("/api/ProductSales", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        const x = data['data'].map(function(d){ return d['product']})
                        const y = data['data'].map(function(d){ return d['sale']})
                        
                        var data = {
                            // A labels array that can contain any sort of values
                            labels: x,
                            // Our series array that contains series objects or in this case series data arrays
                            series: 
                              y
                            
                          };
                        
                        
                        new Chartist.Pie('.ct-pie', data, {
                            chartPadding: 30,
                            labelOffset: 80,
                            labelDirection: 'explode'
                        });
                        
                        
                    });  