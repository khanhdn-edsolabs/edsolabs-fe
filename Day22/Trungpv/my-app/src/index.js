import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useRouteMatch
} from "react-router-dom";
import sig_in from './component/login/sig_in'
ReactDOM.render(
 <div>
   <Router>
      <App>
        <Switch>
          <Route exact path='/sig_in' component={sig_in} />
        </Switch>
      </App>
    </Router>
 </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
