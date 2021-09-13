import React, { useState } from "react";
import NextTwoDay from "./NextTwoDay";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
// import PropTypes from "prop-types";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApi = () => {
    axios
      .get(
        `${process.env.REACT_APP_URL}forecast.json?key=${process.env.REACT_APP_ID}&q=${query}&days=3&aqi=yes&alerts=yes`
      )
      .then((res) => {
        const newData = res.data;
        setWeather(newData);
        setLoading(true);
      })
      .catch(() => {
        alert("Thành Phố này không tồn tại. ");
      })
      .finally(() => {
        setLoading(true);
      });
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setWeather({});
      setLoading(false);
      setTimeout(() => {
        fetchApi(query);
      }, 1500);
      setQuery("");
    }
    return;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <form className="search" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search__input"
          type="text"
          placeholder="Nhập thành phố muốn xem "
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={(e) => handleSearch(e)}
        />
      </form>
      {typeof weather.location !== "undefined" ? (
        <Box border={1} borderRadius={10} padding={1} my={2} width={1}>
          <header>
            <li>
              Today's Weather {weather.location.name},{" "}
              {weather.location.country}
            </li>
          </header>
          <Box
            className=""
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <div>
              <img src={weather.current.condition.icon} alt="" />
            </div>
            <div>
              <li>{weather.forecast.forecastday[0].day.condition.text}</li>
              <li>
                <h4>
                  {Math.trunc(weather.forecast.forecastday[0].day.avgtemp_c)}
                  &deg;C
                </h4>
              </li>
            </div>
            <div>
              <li>Wind: {weather.current.wind_kph.toFixed(1)} kmph</li>
              <li>Precip: {weather.current.precip_mm.toFixed(2)} mm</li>
              <li>Presure: {weather.current.pressure_mb.toFixed(1)} mb</li>
            </div>
          </Box>
        </Box>
      ) : (
        ""
      )}
      {!loading && (
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          margin={1}
        >
          <CircularProgress size={30} />
          <p> "Getting information, please wait..."</p>
        </Box>
      )}
      <NextTwoDay weatherObj={weather} />
    </div>
  );
};

Search.propTypes = {};
export default Search;
