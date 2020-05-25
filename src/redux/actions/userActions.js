import * as types from './actionTypes';

export function userLoginRequest(){
    return{
        type:types.LOGIN_REQUEST
    }
}

export function userLoginSuccess(user){
    return{
        type:types.LOGIN_SUCCESS,
        user
    }
}

export function userLoginError(error){
    return{
        type:types.LOGIN_ERROR,
        error
    }

}

export function userLoginFailed(){
    return{
        type:types.LOGIN_FAILED
    }

}

export function login(args){
    let {username,password} = args;
    let requiredUser;
    return function (dispatch){
        fetch(`http://localhost:4000/users?'username=${username}`)
            .then(resp=>resp.json())
            .then((user)=>{
                requiredUser=user.find(u=>u.password === password);
                if(requiredUser){
                    localStorage.setItem("user",requiredUser.username)
                    dispatch(userLoginSuccess(user))
                }
                else{
                    dispatch()
                }
            }).then(error=>dispatch(userLoginError(error)))
    }
}