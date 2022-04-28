const headers = {
    headers: {'Content-Type': 'application/json'}
}
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCharts);

function drawCharts(){
    fetch("/api/MonthlyCustomers", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
       
                        const rows = data['data'].map(function(d){ return [d['month_name'], d['customer_count']]})
                        var gdata = new google.visualization.DataTable();

                        // Declare columns
                        gdata.addColumn('string', 'Months');
                        gdata.addColumn('number', 'Customer Count');
                        gdata.addRows(rows)
                        var chart = new google.visualization.LineChart(document.getElementById('linechart'));
                        var options = {
                            title: 'Monthly customers',
                            curveType: 'function',
                            legend: { position: 'bottom' }
                          };
                        chart.draw(gdata, options);
                    });
    fetch("/api/MonthlySales", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        const rows = data['data'].map(function(d){ return [d['month_name'], d['sale']]})
                        var gdata = new google.visualization.DataTable();

                        // Declare columns
                        gdata.addColumn('string', 'Months');
                        gdata.addColumn('number', 'Customer Count');
                        gdata.addRows(rows)
                        var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
                        var options = {
                            title: 'Monthly Sale',
                            legend: { position: 'bottom' }
                        };
                        chart.draw(gdata, options);
                    });
    fetch("/api/ProductSales", {
        method: "GET",
        headers: headers
        }).then(response => response.json())
        .then(data => {
                        
                        const rows = data['data'].map(function(d){ return [d['product'], d['sale']]})
                        var gdata = new google.visualization.DataTable();
                        gdata.addColumn('string', 'Product');
                        gdata.addColumn('number', 'Sale');
                        gdata.addRows(rows)
                        var options = {
                            title: 'Sales by products',
                            legend: { position: 'bottom' }
                          };
                  
                          var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                          chart.draw(gdata, options);
                    });  
}





