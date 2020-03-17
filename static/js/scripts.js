let ingredient_counter = 0;

function more_ingredients() {
    console.log(ingredient_counter)
    $('#add_ingredients').append(`
    <div class="row" id="ingredient_${ingredient_counter}_wrapper">
    <div class="input-field col s10 m6">
    <input id="ingredient_${ingredient_counter}" name="ingredient_${ingredient_counter}" type="text" class="validate">
    <label for="ingredient_${ingredient_counter}">${`Ingredient`}</label>
    </div>
    <a class="btn-floating btn-small waves-effect waves-light red" id="remove_ingredient_${ingredient_counter}" onClick="remove_ingredient(this.id)"><i class="material-icons">close</i></a>
    </div>`)
    ingredient_counter++;
    console.log(ingredient_counter)
};

more_ingredients()

$('#add_ingredients_btn').click(function () {
    more_ingredients()
});

function remove_ingredient(ingredient_id){
    ingredient = ingredient_id.substr(ingredient_id.length -1);
    $(`#ingredient_${ingredient}_wrapper`).remove()
    
}