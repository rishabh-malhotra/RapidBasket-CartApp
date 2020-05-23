import * as types from '../actions/actionTypes';

const initalState={
    products:[],
    totalProducts:0,
    isProductsLoading:false,
}

export const prooductsReducer = (state = initalState , action) => {
    switch(action.types){
        case types.GET_PRODUCTS_SUCCESS :
            return Object.assign({}, ...state, {products:action.products}, {totalProducts:action.products.length}, {isProductsLoading:false} );
        case types.GET_PRODUCT_REQUEST:  
            return Object.assign({}, ...state, {isProductsLoading:false} );
        case types.GET_PRODUCTS_ERROR :
            return Object.assign({}, ...state, {error:action.error}, {isProductsLoading:false} );    
        default:  
            return initalState  
    } 
}