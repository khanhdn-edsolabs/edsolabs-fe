import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import LogIn from './pages/LogIn'
import MainPage from './pages/MainPage'
function App() {
  // const { token, setToken } = useToken();
  return (
    <Router>
      <Switch>
        <Route>
          <MainPage path="/" />
        </Route>
        {/* <Route>
          <LogIn path="/login" />
        </Route> */}
      </Switch>
    </Router>
  )
}

export default App
