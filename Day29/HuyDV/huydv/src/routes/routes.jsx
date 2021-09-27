import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const rouster = () => {
  return (
    <Router >
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default rouster
