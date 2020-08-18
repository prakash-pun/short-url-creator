import flask
from application import db

class Url(db.Document):
   code = db.StringField( max_length=20 )
   url = db.StringField(max_length=100)   


