// const getListIngredientsWithIds = ((state, props) =>
// state.ingredients.allIds.map((ingr) =>
// {name: state.ingredients.byId[ingr].name, id: state.ingredients.byId[ingr].id}));


export const getListIngredientsWithIds = (state, props) => {
  return state.ingredients.allIds.map((ingr) => ({name: state.ingredients.byId[ingr].name,
    id: state.ingredients.byId[ingr].id}));
}

export const getListRecipesWithIds = (state, props) => {
  return state.recipes.allIds.map((ingr) => ({name: state.recipes.byId[ingr].name,
    id: state.recipes.byId[ingr].id}));
}

function listAllergenesForRecipe(state, props, idRecipe) {
  let ingredients = state.recipes.byId[idRecipe].listIngredients
  let isRecipeList = []
  let isIngredientList = []

  for (let elem of ingredients) {
    state.recipes.allIds.includes(elem) ? isRecipeList.push(elem) : isIngredientList.push(elem)
  }
  return
}

export const getListAllergenesForRow = (state, props) => {
  if (!state.pageRecipeItem.byId[props.idRow].isSelected) {
    //FONCTION MAGIQUE QUI DONNERA LA LISTE COMPLETE DE TOUT LES ALLERGENES
    return state.pageRecipeItem.byId[props.idRow].listAllergnes
  } else if (state.ingredients.allIds){
    return state.ingredients.byId[state.ingredients.allIds[0]].listAllergnes
  } else {
    return ''
  }
}
