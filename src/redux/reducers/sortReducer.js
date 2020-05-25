import {UPDATE_SORT} from '../actions/actionTypes'
const initialState= {
    orderCode:null
}


export const sortReducer = (state=initialState,action) => {
    switch(action.type){
        case UPDATE_SORT :
            return Object.assign({},...[state],{orderCode:action.orderCode})
        default:
            return state
    }
}