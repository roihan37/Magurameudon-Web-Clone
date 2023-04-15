import { ADDCATEGORY_PENDING, ADDCATEGORY_REJECT, ADDCATEGORY_SUCCESS, FETCHCATEGORY_PENDING, FETCHCATEGORY_REJECT, FETCHCATEGORY_SUCCESS } from "../actions/types"



const initialState = {
    categories: [],
    isLoadingCategory: true,
    isLoadingCategoryAdd: false,
    errorMsg: '',
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHCATEGORY_PENDING:
            return { ...initialState }
        case FETCHCATEGORY_SUCCESS:
            return { ...state, categories: action.payload, isLoadingCategory: false }
        case FETCHCATEGORY_REJECT:
            return { ...state, errorMsg: action.error }
        case ADDCATEGORY_PENDING:
            return { ...initialState, isLoadingCategoryAdd: true }
        case ADDCATEGORY_SUCCESS:
            return { ...state, isLoadingCategoryAdd: false }
        case ADDCATEGORY_REJECT:
            return { ...state, isLoadingCategoryAdd: false }
        default:
            return state
    }
}