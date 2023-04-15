import { DESTROYPRODUCT_SUCCESS } from "../actions/types"
import { EDITPRODUCT_PENDING } from "../actions/types"
import { EDITPRODUCT_REJECT } from "../actions/types"
import { EDITPRODUCT_SUCCESS } from "../actions/types"
import { DESTROYPRODUCT_REJECT } from "../actions/types"
import { DESTROYPRODUCT_PENDING } from "../actions/types"
import { FETCHPRODUCT_PENDING, FETCHPRODUCT_REJECT, FETCHPRODUCT_SUCCESS, GETPRODUCT_PENDING, GETPRODUCT_SUCCESS, GETPRODUCT_REJECT, ADDPRODUCT_PENDING, ADDPRODUCT_SUCCESS, ADDPRODUCT_REJECT } from "../actions/types"

const initialState = {
    products: [],
    product: {},
    isLoadingForm: true,
    isLodingDestroyProduct: '',
    isLoadingAdd: false,
    isLoadingEdit: false,
    isLoading: true,
    errorMsg: ''
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHPRODUCT_PENDING:
            return { ...initialState }
        case FETCHPRODUCT_SUCCESS:
            return { ...state, products: action.payload, isLoading: false }
        case FETCHPRODUCT_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        case GETPRODUCT_PENDING:
            return { ...initialState }
        case GETPRODUCT_SUCCESS:
            return { ...state, product: action.payload, isLoadingForm: false }
        case GETPRODUCT_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        case ADDPRODUCT_PENDING:
            return { ...initialState, isLoadingAdd: true }
        case ADDPRODUCT_SUCCESS:
            return { ...state, isLoadingAdd: false }
        case ADDPRODUCT_REJECT:
            return { ...state, isLoadingAdd: false }
        case EDITPRODUCT_PENDING:
            return { ...state, isLoadingEdit: true }
        case EDITPRODUCT_SUCCESS:
            return { ...state, isLoadingEdit: false }
        case EDITPRODUCT_REJECT:
            return { ...state, isLoadingEdit: false }
        case DESTROYPRODUCT_PENDING:
            return { ...initialState }
        case DESTROYPRODUCT_SUCCESS:
            return { ...state, messageDestroy: action.payload, isLoadingAdd: false }
        case DESTROYPRODUCT_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        default:
            return state
    }
}