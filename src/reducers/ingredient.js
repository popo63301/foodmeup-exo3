import { combineReducers } from 'redux'


const initialStateById = {}

export function ingredientsById(state = initialStateById, action) {
  switch (action.type) {
    default:
        return state
  }
}

const initialStateAllIds = []

export function ingredientsAllIds(state = initialStateAllIds, action) {
  switch (action.type) {
    default:
        return state
  }
}

const ingrdientReducer = combineReducers({
  byId: ingredientsById,
  allIds: ingredientsAllIds
})

export default ingrdientReducer
