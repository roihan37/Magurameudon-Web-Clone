
import {
  FECTHFOOD_PENDING,
  FECTHFOOD_SUCCESS,
  FECTHFOOD_REJECT,
  GETFOOD_PENDING,
  GETFOOD_SUCCESS,
  GETFOOD_REJECT
  } 
from "../actions/types"

const initialState = {
    foods : [],
    food : {},
    isLoading : true,
    isLoadingFoodDetail : true,
    errorMsg : ''
}

export function foodReducer(state = initialState, action) {
  switch (action.type) {
    case FECTHFOOD_PENDING:
      return { ...initialState }
    case FECTHFOOD_SUCCESS:
      return { ...state, foods: action.payload, isLoading : false }
    case FECTHFOOD_REJECT:
      return { ...state, errorMsg: action.err }
    case GETFOOD_PENDING:
      return { ...initialState }
    case GETFOOD_SUCCESS:
      return { ...state, food: action.payload, isLoadingFoodDetail : false }
    case GETFOOD_REJECT:
      return { ...state, errorMsg: action.err }
    default:
      return state
  }
}