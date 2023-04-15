
import { 
    FECTHFOOD_PENDING,
    FECTHFOOD_SUCCESS,
    FECTHFOOD_REJECT,
    GETFOOD_PENDING,
    GETFOOD_SUCCESS,
    GETFOOD_REJECT, 
    GETINGREDIENT_PENDING,
    GETINGREDIENT_SUCCESS,
    GETINGREDIENT_REJECT
} from "./types"

export function pendingFood(){
    return {
        type : FECTHFOOD_PENDING,
    }
}

export function successFood(payload){
    return {
        type : FECTHFOOD_SUCCESS,
        payload
    }
}

export function rejectFood(err){
   return {
       type : FECTHFOOD_REJECT,
        errorMsg : err
   }
}

export function pendingFoodById(){
    return {
        type : GETFOOD_PENDING,
    }
}

export function successFoodById(payload){
    return {
        type : GETFOOD_SUCCESS,
        payload
    }
}

export function rejectFoodById(err){
   return {
       type : GETFOOD_REJECT,
        errorMsg : err
   }
}


export function pendingGetIngredient(){
    return {
        type : GETINGREDIENT_PENDING,
    }
}

export function successGetIngredient(payload){
    return {
        type : GETINGREDIENT_SUCCESS,
        payload
    }
}

export function rejectGetIngredient(error){
   return {
       type : GETINGREDIENT_REJECT,
        errorMsg : error
   }
}

export function fecthFoods(){
    return async (dispatch, getState) => {
        try {
            dispatch(pendingFood())
            const response = await fetch('https://pro.magurameudonch1p3.cloud/pub/items')
            const responseJson = await response.json()
            dispatch(successFood(responseJson))
        } catch (error) {
            // console.log(error);
            dispatch(rejectFood(error))
        }
    }
}

export function getIdFoods(id){
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`https://pro.magurameudonch1p3.cloud/pub/items/${id}`)
            const responseJson = await response.json()
            dispatch(successFoodById(responseJson))
            
        } catch (error) {
            console.log(error);
        }
    }
}
