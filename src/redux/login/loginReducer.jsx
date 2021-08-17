import Cookies from 'js-cookie'

import { SIGN_IN, SIGN_OUT } from './loginTypes'
import Redirection from 'components/Redirection'

const initialState = {
  login: {
    email: '',
    password: '',
    connected: false
  }
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN:
      const obj = {
        email: state.login.email,
        password: state.login.password,
        connected: state.login.connected
      }
      return {
        ...state,
        login: state.login.obj
      };
    case SIGN_OUT:
      const signOut = () => {
        Cookies.remove('token')
        Redirection('/login')
        console.log('>>> signOut')
      }
      return {
        ...state,
        login: signOut()
      };
    default:
      return state;
  }
}

export default loginReducer
