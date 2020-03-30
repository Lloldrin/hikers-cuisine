/* ---------- Add Recipe ---------- */

let ingredient_counter = 0;
let equipment_counter = 0;
let preperation_counter = 0;
let cooking_step_counter = 0;

let recipe_ingredients = {}
let recipe_equipments = {}
let recipe_preperations = {}
let recipe_cooking_steps = {}

/* ----- Add Ingredients ----- */

// When clicked this button runs the more_ingredients function.
$('#add_ingredients_btn').click(function () {
    more_ingredients()
});

// This listens for the user to submit an ingredient and creates a row in the #current_ingredients table. It also creates a button for the user to remove the ingredient from the table.
function more_ingredients() {

    let add_ingredient = {}
    add_ingredient.amount = $('#add_ingredient_amount').val()
    add_ingredient.measure = $('#add_ingredient_measure').val()
    add_ingredient.name = $('#add_ingredient_name').val();
    $('#add_ingredient_amount').val('')
    $('#add_ingredient_measure').val('-')
    $('#add_ingredient_name').val('');

    if (add_ingredient.amount != "" && add_ingredient.measure != "" && add_ingredient.name != "") {
        $('#current_ingredients').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="ingredient_${ingredient_counter}">
        <div class="col s3">${add_ingredient.amount + ' ' + add_ingredient.measure}</div>
        <div class="col s8">${add_ingredient.name}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_ingredient_${ingredient_counter}" onClick="remove_ingredient(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>`)
        recipe_ingredient(add_ingredient, ingredient_counter)
        ingredient_counter++;
    } else {
        M.toast({ html: 'Please fill out all the fields' })
    }
};

// Function to add ingredients to an object. This object is integrated into the recipe object when the user submits the recipe.
function recipe_ingredient(ingredient, i) {
    recipe_ingredients[i] = { 'amount': ingredient.amount, 'measure': ingredient.measure, 'name': ingredient.name }
};

// Function to remove ingredients from the ingredient-object when the user removes them from the ingredient table.
function remove_ingredient(ingredient_id) {
    i = ingredient_id.substr(18);
    $(`#ingredient_${i}`).remove()
    delete recipe_ingredients[i]
}

/* ----- Add Equipment ----- */

// When clicked this button runs the more_equipment function.
$('#add_equipment_btn').click(function () {
    more_equipment()
});

// This listens for the user to submit equipment and creates a row in the #current_equipment table. It also creates a button for the user to remove the equipment from the table.
function more_equipment() {

    equipment_name = $('#add_equipment').val()
    $('#add_equipment').val('')

    if (equipment_name != "") {
        $('#current_equipment').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="equipment_${equipment_counter}">
        <div class="col s1"></div>
        <div class="col s10">${equipment_name}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_equipment_${equipment_counter}" onClick="remove_equipment(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>
        `)
        recipe_equipment(equipment_name, equipment_counter)
        equipment_counter++;
    } else {
        M.toast({ html: 'Please fill out all the fields' })
    }
};

// Function to add equipment to an object. This object is integrated into the recipe object when the user submits the recipe.
function recipe_equipment(equipment, i) {
    recipe_equipments[i] = { 'equipment': equipment }
    equipment_number()
};

// Function to remove equipment from the equipment-object when the user removes them from the equipment table.
function remove_equipment(equipment_id) {
    i = equipment_id.substr(17);
    $(`#equipment_${i}`).remove()
    delete recipe_equipments[i]
    equipment_number()
};

function equipment_number() {
    i = ($('#current_equipment').prop('childElementCount'))
    for (let step = 0; step <= i; step++) {
        $(`#current_equipment > div:nth-child(${step}) > div:first-child`).text(`${step}.`)
    }
}

/* ----- Add Preperations ----- */



// When clicked this button runs the more_preperation function.
$('#add_preperation_btn').click(function () {
    more_preperation()
});

// This listens for the user to submit preperation and creates a row in the #current_preperation table. It also creates a button for the user to remove the preperation from the table.
function more_preperation() {

    preperation_name = $('#add_preperation').val()
    $('#add_preperation').val('')

    if (preperation_name != "") {
        $('#current_preperation').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="preperation_${preperation_counter}">
        <div class="col s1"></div>
        <div class="col s10">${preperation_name}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_preperation_${preperation_counter}" onClick="remove_preperation(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>
        `)
        recipe_preperation(preperation_name, preperation_counter)
        preperation_counter++;
    } else {
        M.toast({ html: 'Please fill out all the fields' })
    }
};

// Function to add preperation to an object. This object is integrated into the recipe object when the user submits the recipe.
function recipe_preperation(preperation, i) {
    recipe_preperations[i] = { 'preperation': preperation }
    preperation_number()
};

// Function to remove preperation from the preperation-object when the user removes them from the preperation table.
function remove_preperation(preperation_id) {
    i = preperation_id.substr(19);
    $(`#preperation_${i}`).remove()
    delete recipe_preperations[i]
    preperation_number()
};

function preperation_number() {
    i = ($('#current_preperation').prop('childElementCount'))
    for (let step = 0; step <= i; step++) {
        $(`#current_preperation > div:nth-child(${step}) > div:first-child`).text(`${step}.`)
    }
}

/* ----- Add Cooking Steps ----- */



// When clicked this button runs the more_cooking_step function.
$('#add_cooking_step_btn').click(function () {
    more_cooking_step()
});

// This listens for the user to submit cooking_step and creates a row in the #current_cooking_step table. It also creates a button for the user to remove the cooking_step from the table.
function more_cooking_step() {

    cooking_step_name = $('#add_cooking_step').val()
    $('#add_cooking_step').val('')

    if (cooking_step_name != "") {
        $('#current_cooking_step').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="cooking_step_${cooking_step_counter}">
        <div class="col s1"></div>
        <div class="col s10">${cooking_step_name}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_cooking_step_${cooking_step_counter}" onClick="remove_cooking_step(this.id)"><i class="material-icons blue-grey-text">close</i></a></div> 
        </div>
        `)
        recipe_cooking_step(cooking_step_name, cooking_step_counter)
        cooking_step_counter++;
    } else {
        M.toast({ html: 'Please fill out all the fields' })
    }
};

// Function to add cooking_step to an object. This object is integrated into the recipe object when the user submits the recipe.
function recipe_cooking_step(cooking_step, i) {
    recipe_cooking_steps[i] = { cooking_step: cooking_step }
    cooking_step_number()
};

// Function to remove cooking_step from the cooking_step-object when the user removes them from the cooking_step table.
function remove_cooking_step(cooking_step_id) {
    i = cooking_step_id.substr(20);
    $(`#cooking_step_${i}`).remove()
    delete recipe_cooking_steps[i]
    cooking_step_number()
}

function cooking_step_number() {
    i = ($('#current_cooking_step').prop('childElementCount'))
    for (let step = 0; step <= i; step++) {
        $(`#current_cooking_step > div:nth-child(${step}) > div:first-child`).text(`${step}.`)
    }
}

function check_recipe() {

    current_recipe = {
        'name': $('#recipe_name').val(),
        'category': $('#recipe_category').val(),
        'servings': $('#recipe_servings').val(),
        'img_url': $('#recipe_img').val(),
        'description': $('#recipe_description').val(),
        'ingredients': recipe_ingredients,
        'equipment': recipe_equipments,
        'preperation': recipe_preperations,
        'cooking_steps': recipe_cooking_steps,
        'password': $('#recipe_password').val()
    }
}

function submit_recipe() {
    check_recipe()
    $('#add_recipe_json').val(JSON.stringify(current_recipe))
    $('#add_recipe_form').submit()
}

function submit_edit() {
    check_recipe()
    $('#edit_recipe_json').val(JSON.stringify(current_recipe))
    $('#edit_recipe_form').submit()
}
    // fetch(`${window.location}/submit_recipe`, {
    //     method: "POST",
    //     credentials: "include",
    //     body: JSON.stringify(current_recipe),
    //     cache: "no-cache",
    //     headers: new Headers({
    //         "content-type": "application/json"
    //     })
    // })
    // .then(function (response) {
    //     if (response.status !== 200) {
    //         console.log(`Looks like there was a problem. Status code: ${response.status}`);
    //         return;
    //     }
    //     response.json().then(function (data) {
    //         console.log(data);
    //         alert('The Recipe Was Added!')
    //         window.location = '/recipe_list'
    //     });
    // })
    // .catch(function (error) {
    //     console.log("Fetch error: " + error);
    // });


// This functions sends a request to the server to delete the recipe from the database
function edit_recipe() {
    $('#edit_recipe_form').submit()
}

function del_recipe() {
    $('#del_recipe_form').submit()
}
// let validation = {'user_input' : $('#del_recipe_pwd').val()}

// fetch(`${window.location}/delete_recipe`, {
//     method: "POST",
//     credentials: "include",
//     body: JSON.stringify(validation),
//     cache: "no-cache",
//     headers: new Headers({
//         "content-type": "application/json"
//     })
// })
// .then(function (response) {
//     if (response.status == 200) {
//         response.json().then(function (data) {
//             console.log(data);
//             alert('The Recipe Was Deleted!')
//             window.location = '/recipe_list'
//         });
//     } else if (response.status == 401)  {
//         console.log(`Invalid Password. Status code: ${response.status}`);
//         alert('Invalid Password')
//         return
//     } else {
//         console.log(`Looks like there was a problem. Status code: ${response.status}`);
//         return;
//     }

// })
// .catch(function (error) {
//     console.log("Fetch error: " + error);
// });


/* ---------- Edit Recipe ---------- */

function populate_edit_page() {
    populate_edit_ingredients()
    populate_edit_equipment()
    populate_edit_preperation()
    populate_edit_cooking_step()
}

function populate_edit_ingredients() {
    for (i in json_edit_recipe['ingredients']) {
        let ingredient = json_edit_recipe['ingredients'][i]
        $('#current_ingredients').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="ingredient_${ingredient_counter}">
        <div class="col s3">${ingredient['amount'] + ' ' + ingredient['measure']}</div>
        <div class="col s8">${ingredient['name']}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_ingredient_${ingredient_counter}" onClick="remove_ingredient(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>`)
        recipe_ingredient(ingredient, ingredient_counter)
        ingredient_counter++
    }
}

function populate_edit_equipment() {
    for (i in json_edit_recipe['equipment']) {
        let equipment = json_edit_recipe['equipment'][i]
        $('#current_equipment').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="equipment_${equipment_counter}">
        <div class="col s1"></div>
        <div class="col s10">${equipment['equipment']}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_equipment_${equipment_counter}" onClick="remove_equipment(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>
        `)
        recipe_equipment(equipment['equipment'], equipment_counter)
        equipment_counter++;
    }
}

function populate_edit_preperation() {
    for (i in json_edit_recipe['preperation']) {
        let preperation = json_edit_recipe['preperation'][i]
        $('#current_preperation').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="preperation_${preperation_counter}">
        <div class="col s1"></div>
        <div class="col s10">${preperation['preperation']}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_preperation_${preperation_counter}" onClick="remove_preperation(this.id)"><i class="material-icons blue-grey-text">close</i></a></div>
        </div>
        `)
        recipe_preperation(preperation['preperation'], preperation_counter)
        preperation_counter++;
    }
}

function populate_edit_cooking_step() {
    for (i in json_edit_recipe['cooking_steps']) {
        let cooking_step = json_edit_recipe['cooking_steps'][i]
        $('#current_cooking_step').append(`
        <div class="row grey lighten-3 recipe_list valign-wrapper" id="cooking_step_${cooking_step_counter}">
        <div class="col s1"></div>
        <div class="col s10">${cooking_step['cooking_step']}</div>
        <div class="col s1"><a class="btn-floating btn-small waves-effect waves-light transparent table_btn" id="remove_cooking_step_${cooking_step_counter}" onClick="remove_cooking_step(this.id)"><i class="material-icons blue-grey-text">close</i></a></div> 
        </div>
        `)
        recipe_cooking_step(cooking_step['cooking_step'], cooking_step_counter)
        cooking_step_counter++;
    }
}