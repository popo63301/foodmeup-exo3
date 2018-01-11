var shortid = require('shortid');

export const addFieldAllergene = () => ({type: 'ADD_FIELD_ALLERGENE'})

export const addNewIngredient = (ingr) => {

  let listAllergnes = ingr.allergenes.filter((elem) => elem !== '')

  let newIngredient = {
          id: shortid.generate(),
          name: ingr.name,
          cost: ingr.cost,
          listAllergnes: listAllergnes
          };

  return {type: 'ADD_NEW_INGREDIENT', newIngredient}
}

export const updateFieldIngredientPage = (field, value) => {

  return {type: 'UPDATE_FIELD_INGREDIENT_PAGE', field, value}
}
export const updateAllergeneIngredientPage = (index, value) => {
  return {type: 'UPDATE_ALLERGENE_INGREDIENT_PAGE', index, value}
}

export const quitAddIngredient = () => ({type: 'QUIT_ADD_INGREDIENT'})

/////////////////////////////////////////////////


export const toggleRecette = (idRow, firstRecette, firstIng) => ({
  type: 'TOGGLE_RECETTE', idRow, firstRecette, firstIng})

export const chooseIngredientOrRecipe = (idRow, idIngOrRecp) => ({
  type: 'CHOOSE_INGREDIENT_OR_RECIPE',
  idRow,
  idIngOrRecp
})
export const deleteRowIngredientRecipe = (idRow) => ({
    type: 'DELETE_ROW_INGREDIENT_RECIPE',
    idRow
})

export const addRow = (firstIng) => ({type: 'ADD_ROW', idRow: shortid.generate(), firstIng})

export const updateFieldQuantity = (idRow, quantity) => ({
  type: 'UPDATE_FIELD_QUANTITY',
  idRow,
  quantity
})

export const updateNameField = (name) => ({
  type: 'UPDATE_NAME_FIELD',
  name
})

export const quitAddRecipe = () => ({type: 'QUIT_ADD_RECIPE'})

export const createNewRecipe = (name, rowsIng) =>{
  let listIngredients = rowsIng.map((elem) => ({
    id: elem.idIngOrRecp,
    isRecipe: elem.isSelected,
    quantity: elem.quantity
  }))

  let arrayPoids = rowsIng.map((e) => parseInt(e.quantity))

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let newRecipe = {
          id: shortid.generate(),
          name: name,
          listIngredients,
          poids: arrayPoids.reduce(reducer)
          };

  return {type: 'CREATE_NEW_RECIPE', newRecipe}
}









/////////////////////////////////////////////////
