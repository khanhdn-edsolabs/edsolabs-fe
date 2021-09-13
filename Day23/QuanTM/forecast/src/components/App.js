import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SearchForm from "./SearchForm";
import Loader from "./Loader";
import Footer from "./Footer";
import TodayWeather from "./TodayWeather";
import ForecastList from "./ForecastList";
import forecastAPI from "../apis/forecastAPI";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    flexGrow: "1",
    padding: "1rem",
  },
  typography: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});

export default function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [currentForecast, setCurrentForecast] = useState(null);
  const [forecastList, setForecastList] = useState([]);

  const fetchWeather = async (q) => {
    try {
      setLoading(true);
      const res = await forecastAPI.get("/forecast.json", {
        params: {
          q,
        },
      });
      const { data } = res;
      // destructuring current
      const {
        wind_kph,
        precip_mm,
        pressure_mb,
        temp_c,
        condition: { text, icon },
      } = data.current;
      const { name, country } = data.location;
      const current = {
        temp: temp_c,
        wind: wind_kph,
        precip: precip_mm,
        pressure: pressure_mb,
        text,
        icon,
        name,
        country,
      };
      // destructuring next forecast days
      const list = data.forecast.forecastday.map(({ date, day }) => {
        const {
          avgtemp_c,
          condition: { icon },
        } = day;
        return {
          date,
          temp: avgtemp_c,
          icon,
        };
      });
      setCurrentForecast(current);
      setForecastList(list.slice(1));
    } catch (error) {
      console.log(error);
      alert("Có lỗi xảy ra, không tìm thấy thành phố đã nhập");
    } finally {
      setLoading(false);
    }
  };

  const renderComponents = () => {
    if (loading) {
      return (
        <Grid item xs={12}>
          <Loader />
        </Grid>
      );
    }
    if (!currentForecast) {
      return null;
    }
    return (
      <>
        <Grid item container xs={12} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <TodayWeather currentForecast={currentForecast} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ForecastList list={forecastList} />
        </Grid>
      </>
    );
  };

  useEffect(() => {
    fetchWeather("Ha Noi");
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.root}
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant="h1" align="center" className={classes.typography}>
          Edsolabs 5-Days Forecast
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <SearchForm
          name="city"
          placeholder="Nhập thành phố bạn muốn xem"
          onSubmit={fetchWeather}
        />
      </Grid>
      {renderComponents()}
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
