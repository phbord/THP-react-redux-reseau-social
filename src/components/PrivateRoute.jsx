import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

import Login from 'pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Cookies.get('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  )} />
)

export default PrivateRoute;