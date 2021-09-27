import Login from './pages/Login.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentList from './pages/StudentList.jsx';
import Team from './pages/Team.jsx';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
        <Route path="/" component={StudentList} />
      </Switch>
    </Router>
  );
}

export default App;
