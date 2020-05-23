import * as types from './actionTypes';
import * as productService from '../../services/products.service'

//naming mobiles as products in all places as a cart application could be used for anything

export function getAllProductsSuccess(products){
    console.log("products113",products)
    return {
        type :types.GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getAllProductsRequest(){
    return {
        type :types.GET_PRODUCTS_REQUEST,
    }
}

export function getAllProductsError(error){
    return {
        type :types.GET_PRODUCTS_ERROR,
        error
    }
}

export function getProductSuccess(product){
    return {
        type : types.GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProductRequest(){
    return {
        type : types.GET_PRODUCT_REQUEST,
    }
}

export function getProductError(error){
    return {
        type : types.GET_PRODUCT_ERROR,
        error
    }
}


export function getProducts(){
    return function(dispatch){
        dispatch(getAllProductsRequest());
        return productService.getAllProducts()
                .then(products =>{
                    console.log("products",products)
                    dispatch(getAllProductsSuccess(products))
                })
                .catch((error)=>{
                    dispatch(getAllProductsError(error))
                    throw error;
                });
    };
}


export function getProduct() {
    return function(dispatch){
        dispatch(getProductRequest());
        return productService.getProduct()
        .then((product)=>dispatch(getProductSuccess(product)))
        .catch( (error) =>{
            dispatch(getProductError(error));
            throw error;
        });
    };
}