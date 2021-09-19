import axios from "axios"

export function postProductCreated(payload) {

    return async function () {

        const formData = new FormData();
        formData.append("brandId", payload.brandId);
        formData.append("capacity", payload.capacity);
        formData.append("categoryId", payload.categoryId);
        formData.append("cost", payload.cost);
        formData.append("description", payload.description);
        formData.append("discount", payload.discount);
        formData.append("image", payload.image[0]);
        formData.append("name", payload.name);
        formData.append("packingId", payload.packingId);
        formData.append("sales", payload.sales);
        formData.append("stock", payload.stock);

        const res = await axios.post("https://pg-delsur.herokuapp.com/products", formData);

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