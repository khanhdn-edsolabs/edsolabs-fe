import './App.css';
import React, {useState} from 'react';
import {CssBaseline, Container} from '@material-ui/core/';
import { Search } from './components/search';
import { Footer } from './components/footer';
import { TodayWeather } from './components/todayWeather';
import { makeStyles } from '@material-ui/core';
import { NextDay } from './components/next5Day';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '110vh',
    justifyContent: 'center',
    alignItems:'center'

  }
}));
const api = {
  key: '15d24afdc65f4ab69f892237210909'
}
function App() {
  // Khoi tao cac bien
  const classes = useStyles();
  const [weather, setWeather] = useState({});
  const [query, setQuery] = React.useState('');
  const timerRef = React.useRef();
  const [next, setNext] = useState([])
  const [forecast, setForecast] = useState(null);
  
  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );
  // Hàm lấy dữ liệu từ API
  const submitRequest = location => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api.key}&q=${location}&days=3&aqi=no&alerts=no
    `)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setNext(result.forecast.forecastday)
        setForecast(true)
        clearTimeout(timerRef.current);
        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
          setQuery('success');
        }, 3000);
      });
    }
  // Biến cho phần modal footer
  const about = {
    name: 'Trương Thanh Tùng',
    date: '27/1/2000',
    school: 'Trường Đại học Khoa học Tự nhiên, ĐHQGHN',
    home: 'Thái Nguyên',
    position: 'Front-end internship'
  }
  // Hàm trả về 2 thứ tiếp theo
  const getDay = next.map((item) =>{
    let date = new Date(item.date);
    let day = date.toLocaleString('en-us', {weekday: 'long'}).slice(0,3);
    return day
  }).slice(1,3)
  // Hàm trả về hai ngày tiếp theo
  const getDate = next.map((item) =>{
    const [yy, mm, dd] = item.date.split(/-/g);
    return `${dd}/${mm}`;
  }).slice(1,3)  
  
  //Hàm trả về icon và nhiệt độ 2 ngày tiếp theo
  const getIcon = next.map((item) => item.day.condition.icon).slice(1,3)
  const get_c = next.map((item) => item.day.avgtemp_c).slice(1,3)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Search submitSearch={submitRequest}/>
        {query === 'success' ? (
          <Container>
            <TodayWeather 
            name={weather.location.name} 
            country={weather.location.country}
            temp_c={weather.current.temp_c} 
            image={weather.current.condition.icon}
            states={weather.current.condition.text}
            wind={weather.current.wind_mph}
            wind2={weather.current.wind_kph}
            precip={weather.current.precip_mm}
            presure={weather.current.pressure_mb}
            /> 
            <NextDay
            arrDay={getDay}
            arrDate={getDate}
            arrIcon={getIcon}
            arrTemp={get_c}/>
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
