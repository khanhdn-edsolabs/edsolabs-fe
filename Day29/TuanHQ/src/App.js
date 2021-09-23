import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Student from 'pages/Student';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Student}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
