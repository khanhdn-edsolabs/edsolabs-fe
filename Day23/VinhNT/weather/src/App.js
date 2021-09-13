/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Weather from './container/Weather.jsx';
require('dotenv').config();

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Weather />
    </React.Fragment>
  );
}

export default App;
