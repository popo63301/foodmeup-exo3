const initialState = {
  name: "",
  cost: "",
  allergenes: [""]
}

export default function pageIngredient(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FIELD_ALLERGENE':
      let newAllergenes = state.allergenes.slice()
      newAllergenes.push('')
      return {...state, allergenes: newAllergenes}

    case 'UPDATE_ALLERGENE_INGREDIENT_PAGE':
      let newAllergenesA = state.allergenes.slice()
      newAllergenesA[action.index] = action.value
      return {...state, allergenes: newAllergenesA}

    case 'UPDATE_FIELD_INGREDIENT_PAGE':
      return {...state, [action.field]: action.value}

    case 'QUIT_ADD_INGREDIENT':
      return initialState

    default:
        return state
  }
}
