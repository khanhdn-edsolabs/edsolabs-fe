import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from './HomePage/_admin';
import Login from './HomePage/Login/_login';
import './Sass/style.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
