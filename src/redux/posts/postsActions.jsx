import React from 'react';
import Cookies from 'js-cookie'

import { POSTS_SUCCESS, POSTS_FAILURE, POST_SUCCESS, POST_FAILURE } from './postsTypes';

// payload: datas de l'action
export const getPosts = async (setPosts) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`http://localhost:1337/posts`, config);

  const data = await response.json();

  setPosts(data)
}

export const countPosts = async (setCountPosts) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`http://localhost:1337/posts/count`, config);

  const data = await response.json();

  setCountPosts(data)
}