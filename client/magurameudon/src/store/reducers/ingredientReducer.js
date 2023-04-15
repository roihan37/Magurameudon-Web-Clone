import { GETINGREDIENT_PENDING, GETINGREDIENT_REJECT, GETINGREDIENT_SUCCESS } from "../actions/types"

const initialState = {
    ingredients: [],
    isLoadingIngredient: true,
    errorMsg: ''
}

export function ingredientReducer(state = initialState, action) {
    switch (action.type) {
        case GETINGREDIENT_PENDING:
            return { ...initialState }
        case GETINGREDIENT_SUCCESS:
            return { ...state, ingredients: action.payload, isLoadingIngredient: false }
        case GETINGREDIENT_REJECT:
            return { ...state, errorMsg: action.error }
        default:
            return state
    }
}