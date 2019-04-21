import os

from flask import Flask, request
from flask_babel import Babel

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        app.config.from_pyfile('config.cfg', silent=True)
    else:
        app.config.from_mapping(test_config)
    babel = Babel(app)

    @babel.localeselector
    def get_locale():
        return request.accept_languages.best_match(['nl', 'en'])
    
    from . import main
    app.register_blueprint(main.bp)
    
    return app


