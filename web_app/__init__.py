from flask import Flask, render_template

#Create a Flask application instance
app = Flask(__name__)
#Define the route for the index page
@app.route('/')
def index():
    #Ask to Flask to render the 'index.html' template
    return render_template('index.html')