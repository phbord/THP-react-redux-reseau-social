import Cookies from 'js-cookie'

import { PROFILES_SUCCESS, PROFILES_FAILURE } from './profilesTypes';

const initialState = {
  users: null,
};

const profilesReducer = (state = initialState, action) => {
  switch(action.type) {
    // PROFILES_SUCCESS
    case PROFILES_SUCCESS:
      console.log('PROFILES_SUCCESS: ',action.payload.jwt)
      Cookies.set('token', action.payload.jwt)
      return {
        ...state,
        users: action.payload.users,
      };
    // PROFILES_FAILURE
    case PROFILES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default profilesReducer
