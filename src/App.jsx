import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Me from 'pages/Me';
import Profiles from 'pages/Profiles';
import Profile from 'pages/Profile';
import Register from 'pages/Register';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const dis = async () => await dispatch(Cookies.get('token'))
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/me">
              <Me />
            </PrivateRoute>
            <PrivateRoute path="/users" exact>
              <Profiles />
            </PrivateRoute>
            <PrivateRoute path="/users/:userId">
              <Profile />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
