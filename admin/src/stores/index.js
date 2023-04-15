import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productReducer } from './reducer/productReducer'
import thunk from 'redux-thunk'
import { categoryReducer } from './reducer/categoryReducer'
import { ingredientReducer } from './reducer/ingredientReducer'
import { userReducer } from './reducer/userReducer'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(combineReducers({
    products : productReducer,
    categories : categoryReducer,
    ingredients : ingredientReducer,
    users : userReducer
}), applyMiddleware(thunk))

export default store