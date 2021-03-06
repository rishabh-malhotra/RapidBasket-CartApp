import * as types from '../actions/actionTypes';

const initalState ={
    product: {},
    isProductInfoLoading: false,
    error: {}
}

export const productReducer = (state=initalState,action)=>{
    switch(action.type){
        case  types.GET_PRODUCT_SUCCESS:
            return Object.assign({}, ...[state], {product:action.product},{isProductInfoLoading:false});
        case types.GET_PRODUCT_REQUEST:
            return Object.assign({}, ...[state],{isProductInfoLoading:true});
        case types.GET_PRODUCT_ERROR:
            return Object.assign({}, ...[state], {error:action.error},{isProductInfoLoading:false});
        default:
            return state    
    }
} 
