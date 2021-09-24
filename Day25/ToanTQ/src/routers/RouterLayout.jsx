import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Timer from '../layouts/Timer';
import Report from '../layouts/Report';

export default function RouterLayout() {
  return (
    <Switch>
      <Route exact path="/" component={Timer} />
      <Route path="/Timer" component={Timer} />
      <Route path="/Report" component={Report} />
    </Switch>
  );
}
