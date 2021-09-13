import "./App.scss";
import SearchCity from "./components/SeachCity/SearchCity";
import LoadingData from "./components/Loading/LoadingData";
import ComponentWeather from "./components/MainComponent/ComponentWeather";
import TheNext from "./components/NextForeCast/TheNext";
import Footer from "./components/FooterModal/Footer";
import { Container, Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
require('dotenv').config();

function App() {
  // const APP_API = "http://api.weatherapi.com/v1/forecast.json?key=";
  // const API_KEY = "037dc84425a04d71a4e45854210909";
  const [flag, setFlag] = useState(0);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState({});
  const [threeDay, setThreeDay] = useState([]);

  function getCity(city) {
    setCity(city);
  }

  useEffect(() => {
    setLoading(true);
    setFlag(0);

    if (city.trim() === "") {
      setToday({});
      setThreeDay([]);
      setLoading(false);
    } else {
      const api = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY }&q=${city}&days=3&aqi=no&alerts=no`;
      axios
        .get(api)
        .then(function (response) {
          setToday(response.data);
          setThreeDay(response.data.forecast.forecastday);
          setLoading(false);
          setFlag(1);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          // setFlag(2);
          Swal.fire({
            icon: 'info',
            title: 'Something went wrong',
            text: 'This city has no information!',
          
          })

        });
    }
  }, [city]);

  return (
    <Container maxWidth="md" className="App">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <h1 style={{color:"white"}}>Edsolabs 5-Day Forecast</h1>
        <SearchCity city={city} getCity={getCity} />

        {loading && <LoadingData />}

        {flag === 0 && <></>}

        {flag === 1 && (
          <>
            <ComponentWeather today={today} />
            <TheNext threeDay={threeDay} />
          </>
        )}

        {flag === 2 && (
          <>
            <Grid item container justifyContent="center">
              <h4 className="detailNothing">
                
              </h4>
            </Grid>
          </>
        )
        }

        <Footer />
      </Grid>
    </Container>
  );
}

export default App;
