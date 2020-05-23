import * as types from './actionTypes';
import { beginRequest,requestError } from './apiStatusActions';
import { productService } from '../../services/products.service'

//naming mobiles as products in all places as a cart application could be used for anything

export function getAllProductsSuccess(products){
    return {
        types:types.GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductSuccess(product){
    return {
        types: types.GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProducts(){
    return function(dispatch){
        dispatch(beginRequest());
        return productService
                .getAllProducts()
                .then((products)=>dispatch(getAllProductsSuccess(products)))
                .catch((error)=>{
                    dispatch(requestError())
                    throw error;
                });
    };
}


export function getProduct() {
    return function(dispatch){
        dispatch(beginRequest());
        return productService
        .getProduct()
        .then((product)=>dispatch(getProductSuccess(product)))
        .catch( (error) =>{
            dispatch(requestError());
            throw error;
        });
    };
}