# foodmeup-exo3


## Screenshot:
![Image](https://image.ibb.co/hrrBmm/mesrecettes.png)

## How to use :
- Clone the repo
- Run ```npm install```
- Run ```npm run start``` and you'll get your app in localhost 3000

## Description:
- "Mes Recettes": create recipes from ingredients and other recipes. By clicking,
on a recipe, you'll get a detail page with the total cost and all the allergies.
- "Mes Ingrédients": create your ingredients, see them all in this page

## Run the test:
Simply hit the command "npm run test" on the terminal


## "En plus" part:
- **Other unit input**: I would have implemented a system of conversion like I did in the first exercise
- **LocalStorage**: each time I dispatch an action, the subscribe function in App.js is called, I'll save my whole store into the localstorage in this function. To limit the number of time I save my store, I can use lodash to throttle to 1 sec before the next saving.
- **Faceted search**: For each filter, I'll filter from what I've filter previously and I'll start from the filter that can help me get very few result to the one that needs more operation (the last one will have very few items to compute so it won't take that much time). 
- **Optimization of storage**: I would normalize my sotre as I did. I'll do a reducer for the "allergènes" (with byId and allIds). For the price, we can still let them in Ingredients. 
- **Javascript backend**: ExpressJS app for the RESTful API, a MongoDB database, the whole hosted in the cloud and we're good to go ! 
