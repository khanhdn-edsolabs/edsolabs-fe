import {
  Container,
  Box,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search, WeatherToday, NextFiveDay, Footer } from './components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

const useStyle = makeStyles((theme) => ({
  container: {
    height: '100%',
    minHeight: '100vh',
    transition: ' all 1000s ease-in',

    background:
      ' linear-gradient(0deg, rgba(93,238,255,1) 0%, rgba(157,248,255,1) 50%)',
  },
}));

function App() {
  // https://www.weatherapi.com/api-explorer.aspx#forecast
  const classes = useStyle();

  const [city, setCity] = useState('');
  /** Tên thành phố nhập vào sai, nếu sai lấy giá trị true */
  const [cityIncorrect, setCityIncorrect] = useState(false);
  // const [days, setDays] = useState(3);
  const [loading, setLoading] = useState(false);
  const [weatherToDay, setWeatherToDay] = useState({});
  const [weatherFiveDay, setWeatherFiveDay] = useState([]);

  const [hex, setHex] = useState('#ffffff');

  /** Lấy data thời tiết từ api */
  useEffect(() => {
    setLoading(true);

    setCityIncorrect(false);

    if (city.trim() === '') {
      setWeatherFiveDay([]);
      setWeatherToDay({});
      setLoading(false);
    } else {
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${city}&days=3&aqi=no&alerts=no`
        )
        .then(function (response) {
          // console.log(response.data);
          setWeatherToDay(response.data);
          setWeatherFiveDay(response.data.forecast.forecastday);
          setLoading(false);
        })
        .catch(function (error) {
          // console.log(error);
          setCityIncorrect(true);
          setLoading(false);
        });
    }
  }, [city]);

  /** Lấy giá trị city từ input search */
  const changeCity = (value) => {
    setCity(value);
  };

  useEffect(() => {
    // if ('geolocation' in navigator) {
    //   console.log('Available');
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     console.log('Latitude is :', position.coords.latitude);
    //     console.log('Longitude is :', position.coords.longitude);
    //     axios
    //       .get(
    //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}%2C${position.coords.longitude}&language=en'`
    //       )
    //       .then((res) => {
    //         console.log(res.data.error_message);
    //       });
    //   });
    // } else {
    //   console.log('Not Available');
    // }

    axios
      .get('https://ipinfo.io/json?token=1a6982852a0e69')
      .then((response) => {
        // console.log(response.data);
        setCity(response.data.city);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = '#' + Math.random().toString(16).substr(-6);
      setHex(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Search
        city={city}
        changeCity={changeCity}
        cityIncorrect={cityIncorrect}
      />

      {/* loading */}
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
        >
          <CircularProgress color="secondary" />
          <Typography align="center" variant="h5" component="div">
            Getting information, please wait...
          </Typography>
        </Box>
      )}

      <WeatherToday weatherToDay={weatherToDay} hex={hex} />
      {weatherFiveDay.length !== 0 && (
        <NextFiveDay weatherFiveDay={weatherFiveDay} hex={hex} />
      )}

      <Footer />
    </Container>
  );
}

export default App;
