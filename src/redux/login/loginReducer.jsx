import Cookies from 'js-cookie'

import { SIGN_IN, SIGN_OUT, LOGIN_SUCCESS, AUTH_SUCCESS } from './loginTypes'

const token = Cookies.get('token')

const initialState = {
  user: null,
  token: Cookies.get('token'),
  isAuth: false,
  checkAuth: token ? true : false
  //checkLogOutBtn: token ? true : false
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    // LOG IN
    case LOGIN_SUCCESS:
      Cookies.set('token', action.payload.jwt)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
        isAuth: true,
        checkAuth: action.checkAuth,
        //checkLogOutBtn: state.checkLogOutBtn
      };
    // LOG OUT
    case SIGN_OUT:
      return {
        ...state,
        login: false,
        checkAuth: action.checkAuth
      };
    default:
      return state;
  }
}

export default loginReducer
