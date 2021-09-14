import "./App.css";
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Search from "./components/Search";
import Footer from "./components/Footer";
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  }
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="App">
        <div className={classes.root}>
          <Header/>
          <Search/>
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
