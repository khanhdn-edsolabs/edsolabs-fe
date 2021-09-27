import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagedata from './page/Pagedata';
import Pagelogin from './page/Pagelogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="login"></Redirect>
          <Route path="/login" component={Pagelogin}></Route>
          <Route path="/student" component={Pagedata}></Route>
        </Switch>
      </Router>
  );
}
export default App;
