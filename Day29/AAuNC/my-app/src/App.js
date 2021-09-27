import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        JSON.parse(localStorage.getItem("isLogged")) === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
