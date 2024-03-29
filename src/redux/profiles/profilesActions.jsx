import React from 'react';
import Cookies from 'js-cookie'

import { PROFILES_SUCCESS, PROFILES_FAILURE, FIND_USER_SUCCESS, FIND_USER_FAILURE } from './profilesTypes';

// payload: datas de l'action
export const getUsers = async (setUsers) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`http://localhost:1337/users`, config);

  const data = await response.json();

  setUsers(data)
}

export const findUser = async (setUser, id) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`http://localhost:1337/users/${id}`, config);

  const data = await response.json();
  //console.log('findUser => data: ',data)

  setUser(data)
}
