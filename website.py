# Debug with: export FLASK_APP=website.py
#             export FLASK_ENV=development
#             flask run
#             OR
#             python website.py
# To make server available to external computers: flask run --host=0.0.0.0
from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route("/")
def redirect_home():
    return redirect(url_for('default_route', path='', pagename='index'))


@app.route('/<pagename>/', defaults={'path': ''})
@app.route('/<path>/<pagename>/')
def default_route(path, pagename):
    try:
        return render_template(path + '/' + pagename + '.html', title=pagename.capitalize())
    except:
        return redirect(url_for('redirect_home'))


if __name__ == '__main__':
    app.run(debug=True)
