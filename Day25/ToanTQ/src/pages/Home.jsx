import React from 'react';
import { Grid } from '@material-ui/core';
import Menu from '../layouts/Menu';

import Timer from '../layouts/Timer';
import Report from '../layouts/Report';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Home() {
  return (
    <Router>
      <Grid container justifyContent="space-between">
        <Menu />
        <Switch>
          <Route exact path="/" component={Timer} />
          <Route path="/Timer" component={Timer} />
          <Route path="/Report" component={Report} />
        </Switch>
      </Grid>
    </Router>
  );
}
