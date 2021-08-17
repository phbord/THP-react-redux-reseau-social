import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

import Login from 'components/Login';

const checkAuth = () => {
  if (Cookies.get('token')) return true
  return false
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  )} />
)

export default PrivateRoute;