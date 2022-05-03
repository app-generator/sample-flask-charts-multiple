# [Flask Charts](https://blog.appseed.us/flask-sample-amcharts-googlecharts-apexcharts/): `amCharts`, `G.Charts`, `Apex`

Sample project crafted with `Flask`, `Flask-RestX` and multiple Charts Libraries to showcase how to plot different charts **Pie, Line and Bar Charts**. 
Frontend uses `Bootstrap5` for styling and the sample dataset is loaded via a custom **Flask CLI** and the project homepage showcases three charts type: `line`, `bar` and `pie`. 

<br />

- 👉 [Multiple Charts via Flask-RestX](https://sample-flask-charts-multiple.appseed-srv1.com/) - LIVE Demo
- 👉 Free [support](https://appseed.us/support) via `email` and [Discord](https://discord.gg/fZC6hup).

<br />

> Features:

- `Up-to-date dependencies`
- `Stack`: Flask
- `API`: Flask-RestX
- `DB Tools`: Flask-SqlAlchemy, SQLite
- `Chart Libraries`: 
  - 👉 [Demo](https://sample-flask-charts-multiple.appseed-srv1.com/charjs) `Charts.js`
  - 👉 [Demo](https://sample-flask-charts-multiple.appseed-srv1.com/chartist) `Chartist`
  - 👉 [Demo](https://sample-flask-charts-multiple.appseed-srv1.com/amcharts) `amCharts`
  - 👉 [Demo](https://sample-flask-charts-multiple.appseed-srv1.com/googlecharts) `Google Charts`
  - 👉 [Demo](https://sample-flask-charts-multiple.appseed-srv1.com/apexcharts) `Apex Charts`

<br />

![Flask Charts: amCharts, Google Charts, Apex - Free sample by AppSeed.](https://user-images.githubusercontent.com/51070104/166502667-5a91b6a9-f73b-4d73-be4e-85b8462265ee.gif)


## ✨ How to use it

> 👉 **Clone Sources** (this repo)

```bash
$ git clone https://github.com/app-generator/sample-flask-charts-multiple.git
$ cd sample-flask-charts-multiple
```

<br />

> 👉 **Install Modules** using a Virtual Environment

```bash
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

Or for **Windows-based Systems**

```bash
$ virtualenv env
$ .\env\Scripts\activate
$
$ # Install modules - SQLite Database
$ pip3 install -r requirements.txt
```

<br />

> 👉 **Set up the environment**

```bash
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
```

Or for **Windows-based Systems**

```bash
$ # CMD terminal
$ set FLASK_APP=app.py
$ set FLASK_ENV=development
$
$ # Powershell
$ $env:FLASK_APP = ".\run.py"
$ $env:FLASK_ENV = "development"
```

<br />

> 👉 **Load Sample Data** from `data` directory

- `monthly_customers.csv`
- `monthly_sales.csv`
- `product_sales.csv`

```bash
$ flask load-data 
```

<br />

> 👉 **Start the APP**

```bash
$ flask run 
```

<br />

## ✨ Code-base structure

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

<br />

> The bootstrap flow

- `run.py` 
  - bundles all resources
  - serve the `index.html`
- `api.py` exposes a simple API using the DB data 
- `templates/index.html`
  - HOMEpage of the project
- `js/custom.js`
  - fetch data exposed by the `API`

<br />

---
[Flask Charts: amCharts, Google Charts, Apex](https://blog.appseed.us/flask-sample-amcharts-googlecharts-apexcharts/) - Free Sample provided by [AppSeed](https://appseed.us)
