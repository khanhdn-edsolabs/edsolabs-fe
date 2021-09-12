import React, { useState } from "react";
import {
  Paper,
  IconButton,
  InputBase,
  CircularProgress,
  CardContent,
  Container, 
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import moment from "moment";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    width: '40%',
    alignSelf : 'center',
    margin: 'auto',
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: "#323934",
  },
  current:{
    display: 'flex',
    border: '2px solid',
    margin: 'auto',
    width: '20%',
    borderRadius: '25px',
  },
  forecast:{
    display: 'flex',
    margin: 'auto',
    width: '40%',
    borderRadius: '25px',
  },
  content:{
    display: 'flex',
    alignItems: 'center',
  },
  leftSide: {
    padding: '0 24px',
  },
  img: {
    width: '64px',
    height: '64px',
    marginLeft: theme.spacing(2),
  },
  item: {
    display: 'flex',
    border: '2px solid',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%',
    borderRadius: '25px',
    margin: 'auto',
    padding: '10px 15px',
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const APIkey = {
    key: "7d98c159beca40d89fd144447211209",
    base: "https://api.weatherapi.com/v1",
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
          setData(res.data);
        })
        .catch((err) => {
          alert("Không tìm thấy địa điểm, vui lòng kiểm tra lại");
        })
        .finally(() => {
          setLoading(false);
          setTitle("");
        });
    }
  };
  return (
    <div>
      <Paper
        className={classes.form}
        onChange={(event) => setTitle(event.target.value)} 
        onKeyPress={search}
        >
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            value={title}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder={'Nhập thành phố muốn xem'}
            value={props.text}
          />
      </Paper>
      <div className="loading">
        {Loading ? (
          <div>
            <CircularProgress />
            Getting information, please wait...{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      {typeof data.location != "undefined" ? (
        <Typography className="root">
          <h2 className={classes.text}>
            Today's Weather in {data.location.name}, {data.location.country}
          </h2>
          <CardContent className={classes.current} id="current">
            <Grid className={classes.content}>
              <img
                className={classes.img}
                src={data.current.condition.icon}
                alt=""
              />
              <Container>
                <Typography gutterBottom>{data.current.condition.text}</Typography>
                <Typography>{data.current.temp_c} °C </Typography>
              </Container>
            </Grid>
            <Grid className={classes.leftSide}>
              <Typography gutterBottom>
                Wind: {data.current.wind_kph} kph
              </Typography>
              <Typography gutterBottom>
                Precip: {data.current.precip_mm} mm
              </Typography>
              <Typography>
                Pressure: {data.current.pressure_mb} mb
              </Typography>
            </Grid>
          </CardContent>
          <h2 className={classes.text}>Two days forecast</h2>
          <div className={classes.forecast}>
            {data.forecast.forecastday.slice(1).map((e) => {
              return (
                <CardContent key={e.date_epoch} className={classes.item} id="current">
                  <Typography gutterBottom>
                    {moment(`${e.date}`).format(`ddd`)}
                  </Typography>
                  <Typography gutterBottom>
                    {moment(`${e.date}`).format(`DD/MM`)}
                  </Typography>
                  <img className={classes.img} src={e.day.condition.icon} alt=""/>
                  <Typography>{e.day.avgtemp_c} °C</Typography>
                </CardContent>
              );
            })}
          </div>
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}