import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Layout/login/Login";
import HomePage from "./Layout/HomePage/HomePage";
import List from "./Layout/HomePage/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sass/main.scss";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/List">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
