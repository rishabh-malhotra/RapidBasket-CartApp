import * as types from '../actions/actionTypes';

const initalState={
    user:{},
    isLoading:false,
    //error={}
}

export const userReducer = (state = initalState , action) => {
    
    switch(action.type){
        case types.LOGIN_SUCCESS :
            console.log("1",action);
            return Object.assign({}, ...[state], {user:action.user},  {isLoading:false} );
        case types.LOGIN_REQUEST:  
            console.log("2",action);
            return Object.assign({}, ...[state], {isLoading:true} );
        case types.LOGIN_FAILED:
            return Object.assign({}, ...[state], {isLoading:false} );
        case types.LOGIN_ERROR :
            console.log("4",action)
            return Object.assign({}, ...[state], {error:action.error}, {isProductsLoading:false} );
        case types.LOGOUT :
            return Object.assign({},...[state],{user:action.user})        
        default:  
            return state  
    } 
}