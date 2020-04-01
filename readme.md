# Hikers Cuisine 

This is a site meant to help experienced and rookie hikers share and find recipes to get inspired for future hikes.

## UX

![UX Example](https://github.com/Lloldrin/Milestone3/blob/master/assets/readme/responsiveness.PNG)

### User Stories
 
* Experienced Hiker: I want to help other hikers by sharing recipes and tricks that I have accumulated during hiking. I also want to find new recipes and get inspired for future hikes.

* New Hiker: I'm just starting out with hiking and want to learn what equipment is needed, what needs to be prepared at home and learn the differences between cooking at home and cooking outdoors.

* Site owner: Want to be able to add amazon-links to suitable equipment for a profit as well as share recipes to get visitors to the site. Also want to get partnerships in the future and find potential sponsors.

### Strategy
The page is meant to be very easy to use. It's a recipe page with a modern, material design that should be clear and obvious. Users should easily find how to add and view recipes. 

### Scope
The site currently has 3 main things. The user needs to be able to view all the recipes, get detailed information about one recipe and add a new recipe. The users also need to be able to remove and edit recipes that they have added. Future expansion include recipe&technique tutorials. 

### Structure 
The page is provided through Flask, so the structure is based on a base template and the individual pages are served through the template. The navigation and footer are the same through all the pages. To keep the navigation obvious the user can't navigate to "edit recipe" without first entering the recipe that is to be edited. 

## Skeleton

![Wireframe1](https://github.com/Lloldrin/Milestone3/blob/master/assets/readme/wireframe1.PNG)
![Wireframe2](https://github.com/Lloldrin/Milestone3/blob/master/assets/readme/wireframe1.PNG)
![Wireframe3](https://github.com/Lloldrin/Milestone3/blob/master/assets/readme/wireframe1.PNG)

### Surface
The Materialize Framework was used to provide the surface layer of the page. To keep with the hiking theme the colors were set to a teal theme. The logo is meant to clearly give a feeling of hiking while still being modern and easy to use. 

## Features

### Existing Features

* **Navigation:** There are not a lot of navigation on the site. From the start only 3 places can be reached. The home page, recipe list and add recipe pages. To reach edit/delete recipe the user have to enter a detailed view of the specific recipe. This makes the page less cluttered and makes it easier for the user to navigate. The social media links are placed in the footer and are present on all pages. 

* **Database-query:** All data is taken from mongoDB. It's processed through the python server before being sent to the frontend. PyMongo is used to handle the database operations.

* **DOM Manipulation:** The page is handled in three parts. The static elements are made with HTML, elements added from the server are added through Jinja and user inputs are handled with Javascript. This includes when the user adds ingredients or equipment.

* **Tooltips:** For ease of use some of the elements have tooltips on hover. To help the user understand the password system it's made clear that the user should NOT consider the password secure.

* **Responsiveness:** Since the site is built on Materialize it's fully responsive and works on mobile, tablets and desktops. Elements change width and some elements are not rendered if the page is too small.

### Features Left to Implement

* **Tutorials:** Add a segment where users can add and read about techniques, equipment and things not directly related to recipes. This includes comparisons of stoves and fuel, how to cook at altitude etc. 

* **Printing:** Adding print-view to make the recipe easy to print for a user. 

## Technologies Used
 
* **HTML**
* **CSS** 
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** 
    * This project extensivly uses JavaScript for most of the page
* **[jQuery](https://jquery.com)** 
    * This project extensivly uses jQuery throughout the entire page
* **[Materialize](https://materializecss.com/)**
	* This project uses Materialize for the graphical elements as well as the grid system.
* **Flex**
    * This project uses flex as part of Materialize.
* **Visual Studio Code** 
    * This is the IDE used to create the page
* **Git** 
    * For version control
* **[ami.responsivedesign.is](http://ami.responsivedesign.is/)**
    * To show the UX example.
* **Browsers** 
    * For testing
    * Chrome
    * Firefox
    * Safari
	

## Testing

The website has been tested in the following ways: 

### Automated Tests

* **![HTML Validator](https://www.freeformatter.com/html-validator.html)**
    * The HTML gives several errors. These are all related to the use of Jinja. 
        * **Example:** 'Bad value “{{ url_for('view_recipe', recipe_id=recipe._id) }}” for attribute “href” on element “a”: Illegal character in path segment: “{” is not allowed.'  <- Is valid use of Jinja, but the validator has issues. The other bugs shown in validator has been fixed. 
        * It also has issues as most paged don't have a doctype, <head> or <body> as those are inherited from the base.html

* **![CSS Validator](https://jigsaw.w3.org/css-validator/validator)**
    * Passed with no errors.

* **![CSS Linter](http://csslint.net/)**
    * Gives warnings.
        * Don't use IDs in selectors. (I use ID's to target with JS and I also want to target specific things in CSS, I could add a class but it would be a unneccesary complication of the page)
        * Disallow overqualified elements. (If I try the linters recomendation I get an error.)

* **![JS Validator](https://jshint.com/)**
    * Passed with errors. The errors are semantic and I perfer the code the way it is. (saying dot notation is preferable etc.)

* **![Responsive Tester](https://www.responsinator.com/?url=https%3A%2F%2Fmilestone-3-hikers-cuisine.herokuapp.com%2Findex)**
    * Showed an error with the navigation buttons on the hero image. Fixed. 

### User Testing

* Several users were asked to try the site. Their feedback was used to improve the site in several ways. 
    * Color scheme
    * UI issues when adding recipes
    * Adding images for the recipes
   
### Browsers 
* Desktop
    * Chrome 
    * Safari
    * Firefox 
* Mobile
    * Huawei P30 Pro
        * Chrome
        * DuckDuckGo
    * iPhone 10 
        * Safari  
    * Samsung Galaxy S8 
        * Chrome  

## Deployment

The site is hosted on Heroku.

* To deploy the app a GitHub repository was created [here](https://github.com/Lloldrin/Milestone3)
    * This was linked to a Heroku app following the guide found [here](https://devcenter.heroku.com/articles/github-integration)
* The site uses the Master branch of the repository
    * It will update automatically with new commits to the master branch
* To ensure that Heroku loads the app correctly the page must contain:
    * requirements.txt - This tells Heroku what libraries are needed for the site to run.
    * Procfile - This tells Heroku how to run the app.
 
Since the site relies on environment variables that are not open it's not possible to run the site locally with full functionality. 

## Credits

### Recipes and images
* Recipes and images are taken from
    * [Fresh Off the Grid](www.freshoffthegrid.com)
    * [Backpacker.com](https://www.backpacker.com)
