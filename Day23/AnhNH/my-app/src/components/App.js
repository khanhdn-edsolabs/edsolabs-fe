import './App.css';
import { useState } from 'react';
import Title from './title';
import Search from './search';
import WeatherToday from './weatherToday';
import ListWeather from './lisstweather';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footter from './footter';
import { LinearProgress } from '@material-ui/core';


function App() {
  const [valueCity, setvalueCity] = useState("")
  const [toDayWeather, settoDayWeather] = useState({})
  const [listWeather, setlistWeather] = useState([])
  const [searchCity, setsearchCity] = useState([])
  const [trangThaiBlockDataSeach, settrangThaiBlockDataSeach] = useState(false)
  const [loading, setloading] = useState(false)
  const handleValueSearch = (city) => {
    setvalueCity(city)
  }
  const onclickTakeApi = () => {
    const urlSearchCity = `${process.env.REACT_APP_URL}/search.json?key=08220ea307a24ef483455044210909&q=${valueCity}`
    if (valueCity === "") {
      alert("hãy nhập tên thành phố đã !")
    }
    else {
      fetch(urlSearchCity)
        .then((res) => {
          return res.json()
        })
        .then((searchCity) => {
          setsearchCity(searchCity)
        })
    }
    settrangThaiBlockDataSeach(true)
  }
  const onkeyUp=(e)=>{
    if(e.keyCode===13)
    {
      onclickTakeApi()
    }
  }
  const onclickDataToday = (city) => {

    const urlTodayWeather = `${process.env.REACT_APP_URL}/current.json?key=08220ea307a24ef483455044210909&q=${city}`
    const urlListWeather = `${process.env.REACT_APP_URL}/forecast.json?key=08220ea307a24ef483455044210909&q=${city}&days=7`
    fetch(urlTodayWeather)
      .then((res) => {
        return res.json()
      })
      .then((weatherTodays) => {
        settoDayWeather(weatherTodays)
      })
    fetch(urlListWeather)
      .then((res) => {
        return res.json()
      })
      .then((listWeathers) => {
        setloading(false)
        setlistWeather(listWeathers.forecast.forecastday)
      })
    settrangThaiBlockDataSeach(false)
  }
  const onFocus = () => {
    settrangThaiBlockDataSeach(true)
  }
  const onBlur = () => {
    settrangThaiBlockDataSeach(false)
  }
  const loadingTrue=()=>{
    setloading(true)
  }
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={4}>
        <Title></Title>
        <Search
          handleValueSearch={handleValueSearch}
          onclickTakeApi={onclickTakeApi}
          dataSearchCity={searchCity}
          trangThaiBlockDataSeach={trangThaiBlockDataSeach}
          onclickDataToday={onclickDataToday}
          onFocus={onFocus}
          onBlur={onBlur}
          onkeyUp={onkeyUp}
          setloading={loadingTrue}
        >
        </Search>
        <Grid item lg={12} align="center">{loading && <LinearProgress />}</Grid>
        <WeatherToday dataToday={toDayWeather}/>
        <ListWeather dataListWeather={listWeather}></ListWeather>
        <Footter></Footter>
      </Grid>
    </Container>
  );
}
export default App;
