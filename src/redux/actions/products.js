import axios from "axios";

export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const PRODUCT_BY_NAME_RESET = 'PRODUCT_BY_NAME_RESET';

export const getProductByName = (name) => {
    return async function(dispatch){
        await axios.get(`https://delsur-api-1.herokuapp.com/products?name=${name}`)
        .then (results => {
            console.log(results)
            dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: results.data
            })
        })       
    };
}

export const getProductByNameReset = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_BY_NAME_RESET,
            payload: []
        })
    }
};