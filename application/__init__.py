from flask import Flask
from config import Config
from flask_mongoengine import MongoEngine

def create_app(test_config=None):
   app = Flask(__name__)
   app.config.from_object(Config)

   db = MongoEngine()
   db.init_app(app)

   from application import routes

   app.register_blueprint(routes.bp)
   return app