import { combineReducers } from 'redux'
import recipeReducer from './recipe'
import ingredientReducer from './ingredient'
import pageIngredient from './pageIngredient'

const appStore = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  pageIngredient
})

export default appStore
