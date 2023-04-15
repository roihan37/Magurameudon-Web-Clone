import {  combineReducers, createStore, applyMiddleware } from 'redux'
import { foodReducer } from './reducers/foodReducer'
import thunk from 'redux-thunk'
import { ingredientReducer } from './reducers/ingredientReducer'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}


// let store = createStore(foodReducer)
let store = createStore(combineReducers({
    foods : foodReducer,
    ingredients : ingredientReducer
}), applyMiddleware(thunk, logger))
// const store = combineReducers({
//   foods : createStore(fetchReducer)
// })

export default  store




