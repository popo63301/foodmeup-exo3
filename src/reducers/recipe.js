import { combineReducers } from 'redux'


const initialStateById = {}

export function recipesById(state = initialStateById, action) {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
      return {...state, [action.newRecipe.id]: action.newRecipe}

    default:
        return state
  }
}

const initialStateAllIds = []

export function recipesAllIds(state = initialStateAllIds, action) {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
      let newarr = state.slice()
      newarr.push(action.newRecipe.id)

      return newarr
    default:
        return state
  }
}

const recipeReducer = combineReducers({
  byId: recipesById,
  allIds: recipesAllIds
})

export default recipeReducer
