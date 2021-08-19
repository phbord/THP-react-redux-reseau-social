import React from 'react';
//import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
//import jwt_decode from "jwt-decode"

import { SIGN_OUT, LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_FAILURE } from './loginTypes';

// payload: datas de l'action
export const login = (userData, url='') => async(dispatch) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  };

  const p = document.querySelector('#error-login')

  const response = await fetch(`http://localhost:1337/auth/local${url}`, config);

  const data = await response.json();

  // Connexion OK
  if (data.user) {
    p.classList.add('d-none')

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
      check: true
    })
  } 
  else if (response.status === 400) {
    p.classList.remove('d-none')
    dispatch({
      type: AUTH_FAILURE,
      payload: data.message
    })
  }
}

export const logout = () => (dispatch) => {
  Cookies.remove('token')
  //window.location = '/login'

  dispatch({
    type: SIGN_OUT,
    check: false
  })
}
