# Linux:
# export FLASK_APP=pweb
# export FLASK_ENV=development
# flask run

# Windows cmd:
# set FLASK_APP=pweb
# set FLASK_ENV=development
# flask run

# Windows PS:
# env:FLASK_APP="pweb"
# env:FLASK_ENV="development"
# flask run


from flask import (Blueprint, request, redirect, render_template)


bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('site/index.html')


@bp.route('/about')
def about():
    return render_template('site/about.html')


@bp.route('/portfolio')
def portfolio():
    return render_template('site/portfolio.html')


@bp.route('/contact')
def contact():
    return render_template('site/contact.html')
