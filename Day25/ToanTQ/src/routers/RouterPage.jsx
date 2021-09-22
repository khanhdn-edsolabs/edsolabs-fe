import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function RouterPage() {
  return (
    <Router>
      <Switch>
        {localStorage.hasOwnProperty('login') ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </>
        ) : (
          <>
            <Route path="/" component={Login} />
          </>
        )}
      </Switch>
    </Router>
  );
}
