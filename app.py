from flask import Flask, render_template, request, redirect
from flask_pymongo import PyMongo
from datetime import datetime

app = Flask(__name__)

@app.route('/dynamic_coupon', methods = ["POST"])
def home():
    if request.method == "POST":
        # accept the product and then give the discount
        data = request.form
        print(data)


if (__name__ == "__main__"):
    app.run(debug = True)
