import {GET_PRODUCTS, GET_CATEGORY, PRODUCT_BY_CATEGORY, PRODUCTS_PAGE} from '../actions/userActions'

let initialState={
    products:[],
    category:[],
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:{
            return{
                ...state,
                products: action.payload
            }
        }
        case GET_CATEGORY:{
            return{
                ...state,
                category: action.payload
            }
        }

        case PRODUCT_BY_CATEGORY:{
            
            return{
                ...state,
                products: action.payload
            }
        }

        case PRODUCTS_PAGE:
            return{
                ...state,
                products: action.payload
            }
            
        default:
            return state
    }
}

export default productReducer;