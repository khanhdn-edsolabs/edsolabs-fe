import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/privateRoute";
import PublicRoute from "./components/common/publicRoute";
import Login from "./pages/login/login";
import Listing from "./pages/listing";

function App() {
  return (
    <Router>
      <Switch>
        <Switch>
          <PrivateRoute path="/" component={Listing} exact />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;
