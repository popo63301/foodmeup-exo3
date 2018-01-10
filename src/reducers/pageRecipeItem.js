import { combineReducers } from 'redux'


const initialStateById = {}

export function itemsById(state = initialStateById, action) {
  switch (action.type) {
    case 'TOGGLE_RECETTE':
      return { ...state,
        [action.idRow]: {
          ...state[action.idRow],
          isSelected: state[action.idRow].isSelected ? false : true  }
        }
    case 'DELETE_ROW_INGREDIENT_RECIPE':
      let newObject = Object.assign({}, state)
      delete newObject[action.idRow];

      return newObject

    case 'ADD_ROW':

      return {...state, [action.idRow]: {idRow: action.idRow, isSelected:false}}
    default:
        return state
  }
}

const initialStateAllIds = []

export function itemsAllIds(state = initialStateAllIds, action) {
  switch (action.type) {
    case 'DELETE_ROW_INGREDIENT_RECIPE':
      let indddex = state.findIndex((elem) => elem === action.idRow)
      let newState = state.slice()
      newState.splice(indddex, 1);

      return newState

    case 'ADD_ROW':
      let newArray = state.slice()
      newArray.push(action.idRow)
      return newArray
      
    default:
        return state
  }
}

const itemsReducer = combineReducers({
  byId: itemsById,
  allIds: itemsAllIds
})

export default itemsReducer
