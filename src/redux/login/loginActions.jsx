import { SIGN_IN, SIGN_OUT } from './loginTypes';

// payload: datas de l'action
export const signIn = () => {
  return {
    type: SIGN_IN
  }
}

export const signOut = (id) => {
  return {
    type: SIGN_OUT
  }
}
