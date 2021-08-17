import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';

import store from './redux/store';
import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Home from 'components/Home';
import Login from 'components/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <div className="container mt-5">
            <Switch>
              <PrivateRoute path="/" component={Home} exact />
              <Route component={Login} exact />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
