import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardMedia, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    display: 'block',
    marginTop: theme.spacing(2),
    borderRadius: '25px',
    overflow: 'auto',
    marginBottom: theme.spacing(2),
    alignSelf: 'center',
  },
  header: {
    textAlign: 'center',
  },

  media: {
    maxWidth: '64px',
    width : '100%',
    height: '64px',
    marginLeft: theme.spacing(2),
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
  },
  mainDetails: {
    alignSelf: 'end',
  },
}));

export default function TodayWeather(props) {
  const classes = useStyles();
  const string = 'Today weather in ' + props.location;
  const weatherPerHour = props.data[0].hour;
  let pressure =
    Math.round(
      (weatherPerHour
        .map((e) => e.pressure_mb)
        .reduce(function (pre, cur) {
          return pre + cur;
        }, 0) /
        24) *
        100
    ) / 100;

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} title={string}></CardHeader>

      <CardContent className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={7} className={classes.leftSide}>
            <CardMedia
              className={classes.media}
              image={props.data[0].day.condition.icon}
              title="Today weather"
            />
            <Container className={classes.mainDetails}>
              <Typography gutterBottom>
                {props.data[0].day.avgtemp_c} °C
              </Typography>
              <Typography>{props.data[0].day.condition.text}</Typography>
            </Container>
          </Grid>
          <Grid item xs={5}>
            <Typography gutterBottom>
              Wind: {props.data[0].day.maxwind_kph} kph
            </Typography>
            <Typography gutterBottom>
              Precip: {props.data[0].day.totalprecip_mm} mm
            </Typography>
            <Typography>Pressure: {pressure} mb </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
