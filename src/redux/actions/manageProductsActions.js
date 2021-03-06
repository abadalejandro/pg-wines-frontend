import axios from "axios"

export function postProductCreated(payload) {

    return async function () {
        console.log(payload)

        const res = await axios.post("https://pg-delsur.herokuapp.com/products", payload) 
        
        return res
    }
}

export function getCategories() {
    return async function (dispatch) {
        var json = await axios.get("https://pg-delsur.herokuapp.com/categories")

        return dispatch({
            type: "GET_CATEGORIES",
            payload: json.data
        })
    }
}

export function getProductsPagination() {
    return async function (dispatch) {
        var json = await axios.get("https://pg-delsur.herokuapp.com/products?itemsPerPage=20&orderBy=id")
       
        return dispatch({
            type: "GET_PRODUCTS_PAGINATION",
            payload: json.data
        })
    }

}

export const getProductsPage = (page) => {
    return async function (dispatch) {
        await axios.get("https://pg-delsur.herokuapp.com/products?itemsPerPage=20&orderBy=id&page=" + page)    
            .then(results => {
                dispatch({
                    type: "GET_PRODUCTS_PAGE",
                    payload: results.data
                })
            })
    }
}


export function deleteProduct(payload) {

    return async function () {

        const resp = await axios.delete("https://pg-delsur.herokuapp.com/products/delete", { data: { id: payload } })
       
        return resp
    }
}

export function updateProduct(payload) {

    return async function () {
        if (typeof payload.categoryId === "object") { payload.categoryId = payload.categoryId.id }
        if (typeof payload.brandId === "object") { payload.brandId = payload.brandId.id }
        if (typeof payload.packingId === "object") { payload.packingId = payload.packingId.id }

        const respuesta = await axios.put("https://pg-delsur.herokuapp.com/products/update", payload)      

        return respuesta
    }
}

export function getBrands() {
    return async function (dispatch) {
        var json = await axios.get("https://pg-delsur.herokuapp.com/brands")
       
        return dispatch({
            type: "GET_BRANDS",
            payload: json.data
        })
    }
}

export function getPacking() {
    return async function (dispatch) {
        var json = await axios.get("https://pg-delsur.herokuapp.com/packing")
       
        return dispatch({
            type: "GET_PACKING",
            payload: json.data
        })
    }
}

export function getAllProductsSlider() {
    return async function (dispatch) {
       var json = await axios.get("https://pg-delsur.herokuapp.com/products?itemsPerPage=300");       
             
        if (json.data?.products) {
            const products = json.data.products;
           
            return dispatch({
                type: "GET_ALL_PRODUCTS_SLIDER",
                payload: products,
            });
        }

    }

}

export function getUserFavorites (userId) {
    return async function (dispatch) {
        var favs = await axios.get("https://pg-delsur.herokuapp.com/products/favs/"+ userId)
        
        return dispatch({
            type: "GET_USER_FAVORITES",
            payload: favs.data.products
        })
    }
}

export function postUserFavorite (payload) {
    return async function () {
        
        var postFav = await axios.post("https://pg-delsur.herokuapp.com/products/addFav/"+ payload.userId, {idProduct: payload.idProduct})
        
        return postFav
}
}

export function deleteUserFavorite (payload) {
    return async function () {
        
        var deleteFav = await axios.delete("https://pg-delsur.herokuapp.com/products/quitFav/"+ payload.userId, {data: {idProduct: payload.idProduct}})
        
        return deleteFav
    }
}

export function createPacking (payload) {
    return async function () {
        var newpacking = await axios.post("https://pg-delsur.herokuapp.com/packing", {name: payload})

        return newpacking
    }
}

export function deletePacking (payload) {
    return async function () {
        var deletePack = await axios.delete("https://pg-delsur.herokuapp.com/packing/delete", {data: {id: payload}})

        return deletePack
    }
}

export function updatePacking (payload) {
    return async function () {
        var updatePack = await axios.put("https://pg-delsur.herokuapp.com/packing/update", {id: payload.id, name: payload.name})

        return updatePack
    }
}