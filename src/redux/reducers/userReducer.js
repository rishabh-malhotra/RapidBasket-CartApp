import * as types from '../actions/actionTypes';

const initalState={
    user:{},
    isLoading:false,
}

export const productsReducer = (state = initalState , action) => {
    
    switch(action.type){
        case types.LOGIN_SUCCESS :
            console.log("1",action);
            return Object.assign({}, ...[state], {user:action.user},  {isLoading:false} );
        case types.LOGIN_REQUEST_REQUEST:  
            console.log("2",action);
            return Object.assign({}, ...[state], {isLoading:true} );
        case types.LOGIN_FAILED:
            return Object.assign({}, ...[state], {isLoading:false} );
        case types.LOGIN_ERROR :
            console.log("4",action)
            return Object.assign({}, ...[state], {error:action.error}, {isProductsLoading:false} );    
        default:  
            return initalState  
    } 
}