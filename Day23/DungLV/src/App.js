import { CircularProgress, Grid } from "@material-ui/core";
import { useState } from "react";
import weather from "./Components/API/weatherApi";
import FilterSearch from "./Components/FilterSearchCity/FilterSearch";
import AboutMe from "./Components/Footerr/AboutMe";
import Forecast5Day from "./Components/Forecast5Day/Forecast5Day";
import SearchInput from "./Components/Search/SearchInput";
import TodayWeather from "./Components/TodayWeather/TodayWeather";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [listWeather, setListWeather] = useState([]);
  const [dataForm, setDataForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      weather
        .searchWeather(inputValue)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  };
  const handlerValueInput = (inputValue) => {
    setInputValue(inputValue);
  };
  const handleValueForm = (valueForm) => {
    if (valueForm === "") {
      alert("Please enter your City");
    } else {
      weather
        .getWeather(valueForm)
        .then((res) => {
          setDataForm(res.data);
        })
        .catch(() => {
          alert("Cannot find your city , please try again!! ");
          setInputValue("");
        });
    }
  };
  const hanldeUrl = (url) => {
    weather.getWeather(url).then((res) => {
      setValue([res.data]);
      setListWeather(res.data.forecast.forecastday);
      setLoading(false);
    });
    setInputValue("");
  };
  const handleHidden = (empty) => {
    setData(empty);
  };
  const eventLoading = () => {
    setLoading(true);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <SearchInput
        handlerValueInput={handlerValueInput}
        handleValueForm={handleValueForm}
        onKeyup={handleKeyup}
        inputValue={inputValue}
      />
      {loading && <CircularProgress />}
      {data.length > 0 && (
        <FilterSearch
          dataSearchFromApi={data}
          hanldeUrl={hanldeUrl}
          handleHidden={handleHidden}
          eventLoading={eventLoading}
        />
      )}
      {value.length > 0 && (
        <TodayWeather valueCurrent={value} valueForm={dataForm} />
      )}
      {value.length > 0 && <Forecast5Day listWeather={listWeather} />}
      <AboutMe />
    </Grid>
  );
}

export default App;
