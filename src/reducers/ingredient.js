import { combineReducers } from 'redux'


const initialStateById = {}

export function ingredientsById(state = initialStateById, action) {
  switch (action.type) {
    case 'ADD_NEW_INGREDIENT':
      return {...state, [action.newIngredient.id]: action.newIngredient}
    default:
        return state
  }
}

const initialStateAllIds = []

export function ingredientsAllIds(state = initialStateAllIds, action) {
  switch (action.type) {
    case 'ADD_NEW_INGREDIENT':
      return [...state, action.newIngredient.id]
    default:
        return state
  }
}

const ingrdientReducer = combineReducers({
  byId: ingredientsById,
  allIds: ingredientsAllIds
})

export default ingrdientReducer
