export const getListIngredientsWithIds = (state, props) => {
  return state.ingredients.allIds.map((ingr) => ({name: state.ingredients.byId[ingr].name,
    id: state.ingredients.byId[ingr].id}));
}

export const getListRecipesWithIds = (state, props) => {
  return state.recipes.allIds.map((ingr) => ({name: state.recipes.byId[ingr].name,
    id: state.recipes.byId[ingr].id}));
}

export const getBoolValidityQuantityField = (state, props) => {
  return state.pageRecipeItem.allIds.map((e) => isNaN(state.pageRecipeItem.byId[e].quantity)).includes(true);
}

export const getListRowsNewRecipe = (state, props) => {
  return state.pageRecipeItem.allIds.map((e) => state.pageRecipeItem.byId[e])
}

export const getListAllRecipes = (state, props) => {
  return state.recipes.allIds.map((e) => state.recipes.byId[e])
}

export const getListIngredientsWithQuantity = (state, props) => {
  return state.recipes.byId[props.match.params.idRecipe].listIngredients.map((e) => (
    {poids: e.quantity, name: e.isRecipe? state.recipes.byId[e.id].name : state.ingredients.byId[e.id].name}
  ))
}
