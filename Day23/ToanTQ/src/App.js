import React, { useState } from "react";
import { getCountries } from "./apis";
import InputForm from "./components/inputForm";
import WeatherToday from "./components/today";
import { Container, Typography, Box } from "@material-ui/core";
import WeatherNextDay from "./components/nextDay";
import CircularUnderLoad from "./components/load";
import Footer from "./components/footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  icon: {
    verticalAlign: "middle",
  },
});

function App() {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [displayLoad, setDisplayLoad] = useState("none");
  const display = countries.length !== 0 ? "block" : "none";

  const getData = (value) => {
    setDisplayLoad("block");
    setTimeout(() => {
      getCountries(value).then(
        (res) => {
          setDisplayLoad("none");
          setCountries(res.data);
        },
        (error) => {
          setDisplayLoad("none");
          return Promise.reject(error);
        }
      );
    }, 300);
  };

  return (
    <>
      <Container className={classes.root} maxWidth="sm">
        <Box textAlign="center">
          <Typography variant="h4" component="h1">
            Edsolabs 5-Day Forecast
          </Typography>
          <InputForm getData={getData} />
          <CircularUnderLoad displayLoad={displayLoad} />
          <WeatherToday display={display} data={countries} />
        </Box>
      </Container>
      <Container className={classes.root} maxWidth="md">
        <WeatherNextDay display={display} data={countries} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
