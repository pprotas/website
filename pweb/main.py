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
