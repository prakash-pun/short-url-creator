from flask import Flask
from config import Config

def create_app(test_config=None):
   app = Flask(__name__)
   app.config.from_object(Config)

   from application import routes

   app.register_blueprint(routes.bp)
   return app