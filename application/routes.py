from flask import render_template, request, json, Response, redirect, flash, url_for, session
from application import app

@app.route("/")
@app.route("/home")
@app.route("/index")
def index():
	return "<h1>Prakash Pun</h1>"
	# return render_template("index.html", index=True)
