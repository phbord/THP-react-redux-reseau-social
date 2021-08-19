import Cookies from 'js-cookie'

import { REGISTER_SUCCESS } from '../login/loginTypes'

const token = Cookies.get('token')

const initialState = {
  user: null,
  token: Cookies.get('token'),
  isAuth: false,
  //checkLogOutBtn: token ? true : false
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      Cookies.set('token', action.user.jwt)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
        isAuth: true
        //checkLogOutBtn: state.checkLogOutBtn
      };
    default:
      return state;
  }
}

export default loginReducer
