import { combineReducers } from 'redux'


const initialStateById = {}

export function recipesById(state = initialStateById, action) {
  switch (action.type) {
    default:
        return state
  }
}

const initialStateAllIds = []

export function recipesAllIds(state = initialStateAllIds, action) {
  switch (action.type) {
    default:
        return state
  }
}

const recipeReducer = combineReducers({
  byId: recipesById,
  allIds: recipesAllIds
})

export default recipeReducer
