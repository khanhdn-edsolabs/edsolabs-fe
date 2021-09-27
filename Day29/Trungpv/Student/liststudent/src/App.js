import React from "react";
// import "./Sass/main.scss";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login"
import {Admin} from './components/login/Admin'


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
        {/* <Route path="/Report">
          <Report />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;