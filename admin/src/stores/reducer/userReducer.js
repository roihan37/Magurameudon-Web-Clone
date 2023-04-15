import { REGISTER_PENDING, REGISTER_REJECT, REGISTER_SUCCESS } from "../actions/types"



const initialState = {
    isLoading: false,
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_PENDING:
            return { ...initialState, isLoading: true }
        case REGISTER_SUCCESS:
            return { ...state, isLoading: false }
        case REGISTER_REJECT:
            return { ...state, isLoading: false }
        default:
            return state
    }
}