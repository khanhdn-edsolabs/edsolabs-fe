import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/login";
import { HomePage } from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;