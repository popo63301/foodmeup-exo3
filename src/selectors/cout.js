export const getTotalCostForRecipe = (state, idRecipe, totalcounter=0) => {
  let listIngredientOfRecipe = state.recipes.byId[idRecipe].listIngredients

  for (let elem of listIngredientOfRecipe) {
    if (!elem.isRecipe) {
      totalcounter = totalcounter + elem.quantity*state.ingredients.byId[elem.id].cost

    } else {
      let factor = state.recipes.byId[elem.id].poids

      factor = factor === 0 ? 1 : factor
      
      totalcounter = totalcounter + elem.quantity*getTotalCostForRecipe(state, elem.id)/factor
    }
  }

  return totalcounter
}
