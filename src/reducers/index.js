import { combineReducers } from 'redux'
import recipeReducer from './recipe'
import ingredientReducer from './ingredient'

const appStore = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
})

export default appStore
