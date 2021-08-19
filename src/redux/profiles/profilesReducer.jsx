import Cookies from 'js-cookie'

import { PROFILES_SUCCESS, PROFILES_FAILURE, FIND_USER_SUCCESS, FIND_USER_FAILURE } from './profilesTypes';

const initialState = {
  users: null,
};

const profilesReducer = (state = initialState, action) => {
  switch(action.type) {
    // PROFILES_SUCCESS
    case PROFILES_SUCCESS:
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
    // FIND_USER_SUCCESS
    case FIND_USER_SUCCESS:
      console.log('Reducer: ', action.payload.data)
      return {
        ...state,
        foundUser: action.payload.data,
      };
    // FIND_USER_FAILURE
    case FIND_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default profilesReducer
