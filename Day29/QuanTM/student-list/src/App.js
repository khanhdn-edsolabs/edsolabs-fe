import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./historyObj";
import LogIn from "pages/LogIn";
import Home from "pages/Home";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LogIn} exact />
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
