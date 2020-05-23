import * as types from "./actionTypes";

export function beginRequest(){
    return {type:types.BEGIN_REQUEST};
}

export function requestError(){
    return {type:types.REQUEST_ERROR};
}