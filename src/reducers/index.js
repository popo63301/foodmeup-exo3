import { combineReducers } from 'redux'
import recipeReducer from './recipe'
import ingredientReducer from './ingredient'
import pageIngredient from './pageIngredient'
import pageRecipe from './pageRecipe'
import pageRecipeItem from './pageRecipeItem'

const appStore = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  pageIngredient,
  pageRecipe,
  pageRecipeItem
})

export default appStore
