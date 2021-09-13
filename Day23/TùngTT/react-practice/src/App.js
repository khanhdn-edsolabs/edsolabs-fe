import './App.css';
import React from 'react';
import {CssBaseline, Container} from '@material-ui/core/';
import { Search } from './components/search';
import { Footer, LoadError} from './components/footer';
import { TodayWeather } from './components/todayWeather';
import { makeStyles } from '@material-ui/core';
import { NextDay } from './components/next5Day';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { UseForecast } from './func/function';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems:'center'

  }
}));

function App() {
  const {weather,
    query,
    loading,
    err,
    getDay,
    getDate,
    getIcon,
    get_c,
    about,
    submitRequest} = UseForecast();

  const classes = useStyles();
  const onSubmit = value => {
    submitRequest(value)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Search submitSearch={onSubmit}/>
        {query === 'success' ? (
          <Container>
            {loading && <TodayWeather 
            name={weather.location.name} 
            country={weather.location.country}
            temp_c={weather.current.temp_c} 
            image={weather.current.condition.icon}
            states={weather.current.condition.text}
            wind={weather.current.wind_mph}
            wind2={weather.current.wind_kph}
            precip={weather.current.precip_mm}
            presure={weather.current.pressure_mb}
            />}
            {loading && <NextDay
            arrDay={getDay}
            arrDate={getDate}
            arrIcon={getIcon}
            arrTemp={get_c}/>} 
            {err && <LoadError/>}
          </Container>
        ) : (
          <Grid container justifyContent="center">  
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '500ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress color="primary"/>
          </Fade>
          </Grid>
        )}
        <Footer
          name={about.name}
          date={about.date}
          school={about.school}
          home={about.home}
          pos={about.position}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
