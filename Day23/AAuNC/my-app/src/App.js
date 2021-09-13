import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Loading from './components/Loading/Loading.js';
import Detail from './components/Detail/Detail.js';
import List from './components/List/List.js';
import Footer from './components/Footer/Footer.js';
import { Container, Grid, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

function App() {

  const [flag, setFlag] = useState(0);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState({});
  const [threeDay, setThreeDay] = useState([]);
  
  function getCity(city) {
    setCity(city);
  }

  useEffect(() => {
    setLoading(true);
    setFlag(0);

    if (city.trim() === '') {
      setToday({});
      setThreeDay([]);
      setLoading(false);
    } else {
      const api = `${process.env.REACT_APP_API}${process.env.REACT_APP_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
      axios
        .get(api)
        .then(function (response) {
          setToday(response.data);
          setThreeDay(response.data.forecast.forecastday);
          setLoading(false);
          setFlag(1);
        })
        .catch(function (error) {
          setLoading(false);
          setFlag(2);
        });
    }
  }, [city]);

  return (
    <Container maxWidth="md" className="App">
      <Grid container justifyContent="center" alignItems="center" className="container">
        <h1>Edsolabs 5-Day Forecast</h1>
        <SearchBar city={city} getCity={getCity} />

        {loading && <Loading />}

        {flag === 0 && (<></>)}

        {flag === 1 &&
          (
            <>
              <Detail today={today} />
              <List threeDay={threeDay} />
            </>
          )
        }

        {flag === 2 &&
          (
            <>
              <Grid item container justifyContent="center">
                <h4 className="detailNothing">No information about this city</h4>
              </Grid>
            </>
          )
        }

        <Footer/>
        
      </Grid>
    </Container>
  );
}

export default App;
