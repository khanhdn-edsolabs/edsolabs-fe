import React, { useState } from "react";
import NextTwoDay from "./NextTwoDay";
// import PropTypes from "prop-types";

const api = {
  key: "a57f100aae5d44d480684457211009",
  base: "http://api.weatherapi.com/v1/",
};

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  async function fetchApi() {
    try {
      const requestUrl = api.base;
      const response = await fetch(
        `${requestUrl}forecast.json?key=${api.key}&q=${query}&days=3&aqi=yes&alerts=yes`
      );
      const responseJSON = await response.json();
      setWeather(responseJSON);
      console.log(responseJSON);
    } catch (error) {
      console.log("failed");
      alert("Thành Phố này không tồn tại");
    }
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      fetchApi(query);
      console.log(query);
      setQuery("");
    }
    return;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log("minh");
  return (
    <div className="container">
      <form className="search col-12" onSubmit={(e) => handleSubmit(e)}>
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
        <ul>
          <header>
            <li>
              Today's Weather {weather.location.name},{" "}
              {weather.location.country}
            </li>
          </header>
          <section className="container d-flex justify-content-between  ">
            <div>
              <li>{weather.forecast.forecastday[0].day.condition.text}</li>
              <li>
                {Math.trunc(weather.forecast.forecastday[0].day.avgtemp_c)}
                &deg;C
              </li>
            </div>
            <div>
              <li>Wind: {weather.current.wind_kph.toFixed(1)} kmph</li>
              <li>Precip: {weather.current.precip_mm.toFixed(2)} mm</li>
              <li>Presure: {weather.current.pressure_mb.toFixed(1)} mb</li>
            </div>
          </section>
        </ul>
      ) : (
        ""
      )}
      <NextTwoDay weatherObj={weather} />
    </div>
  );
};

Search.propTypes = {};
export default Search;
