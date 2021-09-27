import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Home} path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
