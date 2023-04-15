import { ADDCATEGORY_PENDING, ADDCATEGORY_REJECT, ADDCATEGORY_SUCCESS, ADDPRODUCT_PENDING, ADDPRODUCT_REJECT, ADDPRODUCT_SUCCESS, DESTROYCATEGORY_PENDING, DESTROYCATEGORY_SUCCESS, DESTROYPRODUCT_PENDING, DESTROYPRODUCT_REJECT, DESTROYPRODUCT_SUCCESS, EDITPRODUCT_PENDING, EDITPRODUCT_REJECT, EDITPRODUCT_SUCCESS, FETCHCATEGORY_PENDING, FETCHCATEGORY_REJECT, FETCHCATEGORY_SUCCESS, FETCHPRODUCT_PENDING, FETCHPRODUCT_REJECT, FETCHPRODUCT_SUCCESS, GETINGREDIENT_PENDING, GETINGREDIENT_SUCCESS, GETPRODUCT_PENDING, GETPRODUCT_REJECT, GETPRODUCT_SUCCESS, REGISTER_PENDING, REGISTER_REJECT, REGISTER_SUCCESS } from "./types"


export function pendingProduct() {
    return {
        type: FETCHPRODUCT_PENDING,
    }
}

export function successProduct(payload) {
    return {
        type: FETCHPRODUCT_SUCCESS,
        payload
    }
}

export function rejectProduct(error) {
    return {
        type: FETCHPRODUCT_REJECT,
        errorMsg: error
    }
}

export function pendingGetProduct() {
    return {
        type: GETPRODUCT_PENDING,
    }
}

export function successGetProduct(payload) {
    return {
        type: GETPRODUCT_SUCCESS,
        payload
    }
}

export function rejectGetProduct(error) {
    return {
        type: GETPRODUCT_REJECT,
        errorMsg: error
    }
}


export function pendingFetchCategory() {
    return {
        type: FETCHCATEGORY_PENDING,
    }
}

export function successFetchCategory(payload) {
    return {
        type: FETCHCATEGORY_SUCCESS,
        payload
    }
}

export function rejectFetchCategory(error) {
    return {
        type: FETCHCATEGORY_REJECT,
        errorMsg: error
    }
}


export function pendingAddProduct() {
    return {
        type: ADDPRODUCT_PENDING,
    }
}

export function successAddProduct() {
    return {
        type: ADDPRODUCT_SUCCESS,

    }
}

export function rejectAddProduct(error) {
    return {
        type: ADDPRODUCT_REJECT,
        errorMsg: error
    }
}

export function pendingEditProduct() {
    return {
        type: EDITPRODUCT_PENDING,
    }
}

export function successEditProduct() {
    return {
        type: EDITPRODUCT_SUCCESS,
    }
}

export function rejectEditProduct() {
    return {
        type: EDITPRODUCT_REJECT,

    }
}


export function pendingDestroyProduct() {
    return {
        type: DESTROYPRODUCT_PENDING,
    }
}

export function successDestroyProduct(payload) {
    return {
        type: DESTROYPRODUCT_SUCCESS,
        payload
    }
}

export function rejectDestroyProduct(error) {
    return {
        type: DESTROYPRODUCT_REJECT,
        errorMsg: error
    }
}


export function pendingGetIngredient() {
    return {
        type: GETINGREDIENT_PENDING,
    }
}

export function successGetIngredient(payload) {
    return {
        type: GETINGREDIENT_SUCCESS,
        payload
    }
}

export function rejectGetIngredient(error) {
    return {
        type: GETPRODUCT_REJECT,
        errorMsg: error
    }
}

export function pendingAddCategory() {
    return {
        type: ADDCATEGORY_PENDING,
    }
}

export function successAddCategory() {
    return {
        type: ADDCATEGORY_SUCCESS,

    }
}

export function rejectAddCategory() {
    return {
        type: ADDCATEGORY_REJECT,
    }
}

export function pendingDestroyCategory() {
    return {
        type: DESTROYCATEGORY_PENDING,
    }
}

export function successDestroyCategory() {
    return {
        type: DESTROYCATEGORY_SUCCESS,

    }
}

export function rejectDestroyCategory() {
    return {
        type: DESTROYPRODUCT_REJECT,
    }
}

export function pendingRegister() {
    return {
        type: REGISTER_PENDING,
    }
}

export function successRegister() {
    return {
        type: REGISTER_SUCCESS,

    }
}

export function rejectRegister() {
    return {
        type: REGISTER_REJECT,

    }
}


export function fecthProduct() {
    return async (dispatch, getState) => {
        try {
            dispatch(pendingProduct())
            const response = await fetch('https://pro.magurameudonch1p3.cloud/items', {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })
            const responseJson = await response.json()
            // console.log(response,'<<< ini response');
            console.log(responseJson);
            dispatch(successProduct(responseJson))
        } catch (error) {
            // console.log(error);
            dispatch(rejectProduct(error))
        }
    }
}

export function getProductByid(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(pendingGetProduct())
            const response = await fetch('https://pro.magurameudonch1p3.cloud/items/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })
            const responseJson = await response.json()
            // console.log(responseJson);
            dispatch(successGetProduct(responseJson))
        } catch (error) {
            // console.log(error);
            dispatch(rejectGetProduct(error))
        }
    }
}

export function fecthCategory() {
    return async (dispatch, getState) => {
        try {
            dispatch(pendingFetchCategory())
            const response = await fetch('https://pro.magurameudonch1p3.cloud/categories', {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })

            const responseJson = await response.json()
            console.log(responseJson, '<<<<');
            dispatch(successFetchCategory(responseJson))
        } catch (error) {
            dispatch(rejectFetchCategory(error))
        }
    }
}

export function addProduct(formProduct) {

    const ingredientResult = formProduct.inggredientLimit
    formProduct.nameIngredient = ingredientResult

    console.log(formProduct, '<<<< action');
    return async (dispatch, getState) => {
        dispatch(pendingAddProduct())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
                body: JSON.stringify(formProduct)
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            dispatch(successAddProduct())
            return responseJson
            //    dispatch(successAddProduct('Success Created'))

        } catch (error) {
            console.log(error, '<<< action');
            dispatch(rejectAddProduct())
            throw error

        }
    }
}

export function editProduct(formProduct, id) {


    return async (dispatch, getState) => {
        dispatch(pendingEditProduct())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/items/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
                body: JSON.stringify(formProduct)
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson);
            dispatch(successEditProduct())
            return responseJson

        } catch (error) {
            console.log(error, '<<< action');
            dispatch(rejectEditProduct())
            throw error

        }
    }
}

export function destroyProduct(id) {

    return async (dispatch, getState) => {
        dispatch(pendingDestroyProduct())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/items/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson);
            dispatch(successDestroyProduct('Success deleted'))
            dispatch(fecthProduct())

        } catch (error) {
            // console.log(error,'<<< action');
            return dispatch(rejectDestroyProduct(error.error))

        }
    }
}

export function getIngredient(id) {

    return async (dispatch, getState) => {
        dispatch(pendingGetIngredient())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/ingredients/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson);
            dispatch(successGetIngredient(responseJson))
            // dispatch(fecthProduct())

        } catch (error) {
            // console.log(error,'<<< action');
            return dispatch(rejectGetIngredient(error.error))

        }
    }
}

export function addCategory(formCategory) {

    return async (dispatch, getState) => {
        dispatch(pendingAddCategory())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
                body: JSON.stringify(formCategory)
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson);
            dispatch(successAddCategory())
            return responseJson

        } catch (error) {

            dispatch(rejectAddCategory())
            throw error

        }
    }
}

export function destroyCategory(id) {

    return async (dispatch, getState) => {
        dispatch(pendingDestroyCategory())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/categories/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
            })

            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson);
            dispatch(successDestroyCategory())
            dispatch(fecthCategory())
            return responseJson
        } catch (error) {
            // console.log(error,'<<< action');
            dispatch(rejectDestroyCategory())
            throw error

        }
    }
}

export function registerUser(formRegister) {

    return async (dispatch, getState) => {
        dispatch(pendingRegister())
        try {
            const response = await fetch('https://pro.magurameudonch1p3.cloud/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.getItem("access_token")
                },
                body: JSON.stringify(formRegister)
            })
            console.log(response);
            const responseJson = await response.json()
            console.log(responseJson, '<<< action');
            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(successRegister())
            return responseJson

        } catch (error) {

            dispatch(rejectRegister())
            throw error

        }
    }
}

