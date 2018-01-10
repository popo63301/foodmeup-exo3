function reduction(array) {
	let mydico = {}

	for (let elem of array) {
		mydico[elem] = mydico[elem] + 1 || 1
	}

	let arrKeys = []
	for (let keys in mydico) {
		arrKeys.push(keys)
	}

	return arrKeys
}


export const getListAllAllergenesForRecipe = (state, idRecipe, list=[]) => {
  let listIngredientOfRecipe = state.recipes.byId[idRecipe].listIngredients

  for (let elem of listIngredientOfRecipe) {
    if (!elem.isRecipe) {
      if (state.ingredients.byId[elem.id].listAllergnes) {
        if (state.ingredients.byId[elem.id].listAllergnes.length>1) {
          list = list.concat(state.ingredients.byId[elem.id].listAllergnes)
        } else {
          list.push(state.ingredients.byId[elem.id].listAllergnes)
        }

      }
    } else {
      list = getListAllAllergenesForRecipe(state, elem.id,list)
    }
  }
  return list
}


export const allergenesForRecipe = (state, idRecipe) => {
  let thelist = getListAllAllergenesForRecipe(state, idRecipe)

  return reduction(thelist)
}
