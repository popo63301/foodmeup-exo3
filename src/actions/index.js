export const addFieldAllergene = () => ({type: 'ADD_FIELD_ALLERGENE'})

export const addNewIngredient = (ingr) => {

  console.log("BRAVO MORRAY")
  let newIngredient;
  return {type: 'ADD_NEW_INGREDIENT', newIngredient}
}

export const updateFieldIngredientPage = (field, value) => {

  return {type: 'UPDATE_FIELD_INGREDIENT_PAGE', field, value}
}
export const updateAllergeneIngredientPage = (index, value) => {
  return {type: 'UPDATE_ALLERGENE_INGREDIENT_PAGE', index, value}
}

export const quitAddIngredient = () => ({type: 'QUIT_ADD_INGREDIENT'})
