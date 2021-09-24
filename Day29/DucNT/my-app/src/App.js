import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/Login";
import StudentList from "./pages/StudentList/StudentList";
import StudentTeam from "./pages/StudentTeam/StudentTeam";
import MyTab from "./pages/Tab/MyTab";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/student_list" component={StudentList}></Route>
          <Route exact path="/student_team" component={StudentTeam}></Route>
          <Route exact path="/my_tab" component={MyTab}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
