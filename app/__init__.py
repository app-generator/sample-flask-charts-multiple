from flask import Flask

from app.models      import db, MonthlyCustomers, MonthlySales, ProductSales
from app.api         import api_blueprint
from app.routes      import frontend_blueprint

from app.data_loader import data_importer

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']        = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



app.register_blueprint(frontend_blueprint)

app.register_blueprint(api_blueprint, url_prefix="/api")


@app.cli.command("load-data")
def load_data():
    db.create_all()
    data_importer(db, MonthlyCustomers, 
                "data/monthly_customers.csv", 
                ["month_name", "customer_count"], [str, int])
    data_importer(db, MonthlySales, 
                "data/monthly_sales.csv", 
                ["month_name", "sale"], [str, int])
    data_importer(db, ProductSales, 
                "data/product_sales.csv", 
                ["product", "sale"], [str, int])

@app.before_first_request
def initialize_database(): 
    db.create_all() 

db.init_app(app)

