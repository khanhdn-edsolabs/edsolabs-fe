import React, { useState } from "react";
import Spin from "../loading.gif";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import moment from "moment";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginBottom: "16px",
    width: "50%",
    [`& fieldset`]: {
      borderRadius: 50,
      border: "1px solid",
    },
  },
}));

export default function ShowInfo(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const APIkey = {
    key: "d20f4b0450d84a0dacf81919210909",
    base: "http://api.weatherapi.com/v1",
    forecase: "/forecast.json",
    locate: title,
    days: 3,
  };
  const search = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `${APIkey.base}${APIkey.forecase}?key=${APIkey.key}&q=${APIkey.locate}&days=${APIkey.days}&aqi=no&alerts=no`
        )
        .then((res) => {
          setCity(res.data);
        })
        .catch((err) => {
          alert("Không thể kết nối tới server");
        })
        .finally(() => {
          setLoading(false);
          setTitle("");
        });
    }
  };
  return (
    <div>
      <h1>Edsolabs 3-Day Forecast</h1>
      <TextField
        id="outlined-basic"
        className={classes.textfield}
        placeholder="Nhập thành phố muốn xem"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        onKeyPress={search}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="loading">
        {isLoading ? (
          <div>
            <img src={Spin} className="loading-img" alt="loading"></img>Getting
            information, please wait...{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      {typeof city.location != "undefined" ? (
        <div className="show-fore">
          <div className="current">
            <h2>
              Today's Weather in {city.location.name}, {city.location.country}
            </h2>
            <div className="current_info">
              <div className="temp">
                <img
                  src={city.current.condition.icon}
                  alt=""
                  className="temp-img"
                ></img>
                <div>
                  <p>{city.current.condition.text}</p>
                  <p>{city.current.temp_c} °c</p>
                </div>
              </div>
              <div className="other">
                <p>Wind: {city.current.wind_kph} kph</p>
                <p>Precip: {city.current.precip_mm} mm</p>
                <p>Pressure: {city.current.pressure_mb} mb</p>
              </div>
            </div>
          </div>
          <h3>Next 2 day forecast</h3>
          <div className="forecast_5day">
            {city.forecast.forecastday.slice(1).map((d) => {
              return (
                <div key={d.date_epoch} className="forecast_single">
                  <p className="dow">{moment(`${d.date}`).format(`ddd`)}</p>
                  <p className="time">{moment(`${d.date}`).format(`DD/MM`)}</p>
                  <img src={d.day.condition.icon} alt=""></img>
                  <p>{d.day.avgtemp_c} °c</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
