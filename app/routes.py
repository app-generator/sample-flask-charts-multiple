from flask import Blueprint, request, render_template

frontend_blueprint = Blueprint('routes', __name__)


@frontend_blueprint.route('/')
def index():
    return render_template("index.html") 

@frontend_blueprint.route("/charjs")
def charjs():
    return render_template("chartjs.html")

@frontend_blueprint.route("/chartist")
def chartist():
    return render_template("chartist.html")

@frontend_blueprint.route("/amcharts")
def amcharts():
    return render_template("amcharts.html")

@frontend_blueprint.route("/googlecharts")
def googlecharts():
    return render_template("googlecharts.html")

@frontend_blueprint.route("/apexcharts")
def apexcharts():
    return render_template("apexcharts.html")