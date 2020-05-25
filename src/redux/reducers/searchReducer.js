import * as types from '../actions/actionTypes';

const initialState={
    searchCriteria:''
}

export const searchReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.UPDATE_SEARCH:
            return Object.assign({},...[state],{searchCriteria: action.searchText});
        default:
            return initialState;    
    }
}