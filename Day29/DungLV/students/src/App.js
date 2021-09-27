import { Redirect, useHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginForm } from "./components/Login/LoginForm";
import { Students } from "./components/students/Students";
const Check = () => {
  const history = useHistory();
  if (localStorage.getItem("access_token")) {
    history.push("/students");
  }
  return null;
};
function App() {
  return (
    <Router>
      <Check />
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route
          path="/students"
          render={() => {
            return localStorage.getItem("access_token") ? (
              <Students />
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
