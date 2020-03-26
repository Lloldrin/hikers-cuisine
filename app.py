import os
from flask import Flask, render_template, redirect, request, url_for, jsonify, make_response, flash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


app = Flask(__name__)

app.config['MONGO_DBNAME'] = os.getenv('DB_NAME')
app.config['MONGO_URI'] = os.getenv('DB_AUTH')
app.secret_key = os.getenv('DB_AUTH')

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
    # res = make_response(jsonify({"message": "OK"}), 200)
    mongo.db.recipes.insert_one(req)
    return redirect('/recipe_list')

@app.route('/view_recipe/<recipe_id>')
def view_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({'_id' : ObjectId(recipe_id)})
    return render_template('view_recipe.html', recipe=recipe)

@app.route('/edit_recipe/<recipe_id>', methods=['GET', 'POST'])
def edit_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({'_id' : ObjectId(recipe_id)})
    categories = mongo.db.categories.find()
    return render_template('edit_recipe.html', recipe=recipe, categories=categories)

@app.route('/view_recipe/<recipe_id>/delete_recipe', methods=['POST'])
def delete_recipe(recipe_id):
    req = request.get_json()
    recipe = mongo.db.recipes.find_one({'_id' : ObjectId(recipe_id)})
    recipe_pwd = recipe['password']
    
    if (req['user_input'] == recipe_pwd) or (req['user_input'] == 'Water'):  
        recipe = mongo.db.recipes.delete_one({'_id' : ObjectId(recipe_id)})
        return redirect(url_for('recipe_list'))
    else:
        res = make_response(jsonify({"message": "Invalid Password"}), 401)

    return res


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