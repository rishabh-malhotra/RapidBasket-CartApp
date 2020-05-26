import * as types from "./actionTypes";

export function userLoginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function userLoginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  };
}

export function userLoginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
}

export function userLoginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function login(args) {
  let { username, password } = args;
  username=username.toLowerCase();  
  let requiredUser = {};
  return function (dispatch) {
    dispatch(userLoginRequest());

    fetch(`http://localhost:4000/users?name=${username}`)
      .then((resp) => resp.json())
      .then((user) => {
        requiredUser = user.find((u) => u.password === password);
        if (requiredUser) {
          localStorage.setItem("user", JSON.stringify(requiredUser));
          dispatch({
            type: types.LOGIN_SUCCESS,
            user: requiredUser,
          });
        } else {
          dispatch({
            type: types.LOGIN_FAILED,
          });
        }
      })
      .catch((error) =>
        dispatch({
          type: types.LOGIN_ERROR,
          error,
        })
      );
  };
}

export function logOut() {
localStorage.removeItem('user');
  return {
    type: types.LOGOUT,
    user: null,
  };
}
