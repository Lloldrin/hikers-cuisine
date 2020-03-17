let ingredient_counter = 0;
let recipe_ingredients = {}

function more_ingredients() {

    ingredient_amount = document.getElementById('add_ingredient_amount').value
    ingredient_measure = + document.getElementById('add_ingredient_measure').value
    ingredient_name = document.getElementById('add_ingredient_name').value;

    if (ingredient_amount != "" && ingredient_measure != "" && ingredient_name != "") {
        $('#current_ingredients').append(`
        <tr id="ingredient_${ingredient_counter}">
        <td> ${ingredient_amount + ' ' + ingredient_measure}</td>
        <td> ${ingredient_name}</td>
        <td><a class="btn-floating btn-small waves-effect waves-light transparent" id="remove_ingredient_${ingredient_counter}" onClick="remove_ingredient(this.id)"><i class="material-icons blue-grey-text">close</i></a>
        </div><td>
        </tr>`)
        recipe_ingredient(ingredient_amount, ingredient_name, ingredient_counter)
        ingredient_counter++;
    }else{
        M.toast({html: 'Please fill out all the fields'})
    }
};

function recipe_ingredient(amount, ingredient, i){
    recipe_ingredients[i] = [i]
    recipe_ingredients[i]['amount'] = amount
    recipe_ingredients[i]['ingredient'] = ingredient
};

$('#add_ingredients_btn').click(function () {
    more_ingredients()
});

function remove_ingredient(ingredient_id) {
    i = ingredient_id.substr(18);
    $(`#ingredient_${i}`).remove()
    delete recipe_ingredients[i]
}