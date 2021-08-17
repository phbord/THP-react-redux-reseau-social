import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Header from 'components/Header';
import Home from 'components/home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
