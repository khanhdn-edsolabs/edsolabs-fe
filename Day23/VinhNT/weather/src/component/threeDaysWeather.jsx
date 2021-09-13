import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  label: {
    color: '#323934',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    borderRadius: '25px',
  },
  media: {
    width: '64px',
    height: '64px',
  },
}));
const formatDate = function (date) {
  let dates = date.split('-');
  return dates[2] + '/' + dates[1];
};
const formatDay = function (date) {
  let dates = date.split('-');
  return new Date(dates[1] + ' ' + dates[2] + ', ' + dates[0]);
};

const textDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default function ThreeDaysWeather(props) {
  const classes = useStyles();
  return (
    <>
      <Typography gutterBottom className={classes.label} variant="h5">
        Three days forecast{' '}
      </Typography>
      <Grid container className={classes.root} spacing={4}>
        {props.data.map((e) => {
          return (
            <Grid className={classes.item} key={e.date} item sm={4}>
              <Card className={classes.item}>
                <Typography variant="h5" gutterBottom>
                  {textDay[formatDay(e.date).getDay()]}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formatDate(e.date)}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={e.day.condition.icon}
                  title="Today weather"
                />
                <Typography>{e.day.avgtemp_c} °C</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
