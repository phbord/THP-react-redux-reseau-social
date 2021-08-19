import React from 'react';
import Cookies from 'js-cookie'

import { PROFILES_SUCCESS, PROFILES_FAILURE } from './profilesTypes';

// payload: datas de l'action
export const getUsers = async (setUsers) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
    //body: JSON.stringify(userData)
  };

  const response = await fetch(`http://localhost:1337/users`, config);

  const data = await response.json();

  setUsers(data)

  // Connexion OK
  // if (data.user) {
  //   p.classList.add('d-none')

  //   dispatch({
  //     type: PROFILES_SUCCESS
  //   })
  // } 
  // else if (response.status === 400) {
  //   dispatch({
  //     type: PROFILES_FAILURE,
  //     payload: data.message
  //   })
  // }
}

export const findUser = (setUser, id) => async (dispatch) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`http://localhost:1337/users/${id.userId}`, config);
  //console.log(response,' / url: ',`http://localhost:1337/users/${id.userId}`)

  const data = await response.json();

  setUser(data)

  // Connexion OK
  if (data) {
    dispatch({
      type: PROFILES_SUCCESS
    })
  } 
  else if (response.status === 400) {
    dispatch({
      type: PROFILES_FAILURE,
      payload: data.message
    })
  }
}
