import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


app = Flask(__name__)



mongo = PyMongo(app)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/recipe_list')
def recipe_list():
    return render_template('recipe_list.html', recipes=mongo.db.recipes.find())

@app.route('/add_recipe')
def add_recipe():
    return render_template('add_recipe.html')

@app.route('/edit_recipe')
def edit_recipe():
    return render_template('edit_recipe.html')

@app.route('/view_recipe')
def view_recipe():
    return render_template('view_recipe.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(
        host=os.environ.get('IP'), 
        port=int(os.environ.get('PORT', 5000)),
        debug=True)