# sample-flask-charts-multiple

Sample project crafted with Flask, Flask-RestX, ChartJS, Chartists, amCharts, Google Charts and Apex Charts to showcase how to plot different charts Pie, Line and Bar Charts using various charting libraries available. Frontend uses Bootstrap5 for styling. The dataset is loaded via a custom Flask CLI.



## ✨ How to use it

```bash
$ # Clone the sources
$ git clone https://github.com/app-generator/sample-flask-charts-multiple.git
$ cd sample-flask-charts-multiple
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ # Install requirements
$ pip3 install -r requirements.txt
$
$ # Set the FLASK_APP environment variable
$ (Unix/Mac) export FLASK_APP=run.py
$ (Windows) set FLASK_APP=run.py
$ (Powershell) $env:FLASK_APP = ".\run.py"
$
$ # Set up the DEBUG environment
$ # (Unix/Mac) export FLASK_ENV=development
$ # (Windows) set FLASK_ENV=development
$ # (Powershell) $env:FLASK_ENV = "development"
$
$ # Run the application
$ # --host=0.0.0.0 - expose the app on all network interfaces (default 127.0.0.1)
$ # --port=5000    - specify the app port (default 5000)  
$ flask run --host=0.0.0.0 --port=5000
$
$ # Access the app in browser: http://127.0.0.1:5000/
```

<br />

## ✨ Code-base structure

The project has a super simple structure, represented as bellow:

```bash
< PROJECT ROOT >
   |
   |-- app/
   |    |
   |    |-- __init__.py                 # Initialization of app
   |    |-- routes.py                   # Handlers for the front end routes
   |    |-- api.py                      # REST API hanlder
   |    |-- data_loader.py              # Load data from data/ folder to sqlite database
   |    |-- models.py                   # Database models for storing data
   |    |-- models.py                   # Database models for storing data
   |    |
   |    |-- static/
   |    |    |-- <css, JS, images>       # CSS files, Javascripts files
   |    |
   |    |-- templates/
   |    |    |
   |    |    |-- index.html              # Index page
   |    |    |-- chartjs.html            # Charts with Chart.js
   |    |    |-- chartist.html           # Charts with chartist
   |    |    |-- amcharts.html           # Charts with amCharts
   |    |    |-- googlecharts.html       # Charts with Google Charts
   |    |    |-- apexcharts.html         # Charts with Apex Charts
   |    |    
   |    |
   |   data/
   |    |-- monthly_customers.csv
   |    |-- monthly_sales.csv
   |    |-- product_sales.csv
   |
   |-- requirements.txt
   |-- run.py
   |
   |-- ************************************************************************
```