import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from 'components/Header';

function App() {
  return (
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
  );
}

export default App;
