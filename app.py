import os
from flask import Flask, render_template, redirect, request, url_for, jsonify, make_response
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


app = Flask(__name__)

app.config['MONGO_DBNAME'] = os.getenv('DB_NAME')
app.config['MONGO_URI'] = os.getenv('DB_AUTH')

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
    return render_template('add_recipe.html', categories=mongo.db.categories.find())

@app.route("/add_recipe/submit_recipe", methods=["POST"])
def create_entry():
    req = request.get_json()
    print(req)
    res = make_response(jsonify({"message": "OK"}), 200)
    mongo.db.recipes.insert_one(req)
    return res

@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipe = mongo.db.recipes
    recipe.insert_one(request.form.to_dict())
    return redirect(url_for('add_recipe'))

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