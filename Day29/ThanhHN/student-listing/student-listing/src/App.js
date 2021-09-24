import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import { Login } from './containers/Login';
import { StudentList } from './containers/StudentList';
import { StudentTeam } from './containers/StudentTeam';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="login" />
        <Route path="/login" component={Login} />

        <React.Fragment>
          <Route path="/students" component={HeaderComponent} />
          <Route path="/students/studentList" component={StudentList} />
          <Route path="/students/studentTeam" component={StudentTeam} />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
