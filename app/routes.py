from flask import Blueprint, request, render_template

frontend_blueprint = Blueprint('routes', __name__)


@frontend_blueprint.route('/')
def index():
    return render_template("index.html") 

