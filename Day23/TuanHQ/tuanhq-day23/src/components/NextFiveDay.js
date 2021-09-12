import { Box, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

NextFiveDay.propTypes = {
  weatherFiveDay: PropTypes.array,
};

NextFiveDay.defaultProps = {
  weatherFiveDay: [],
};

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginTop: 20,
    margin: 'auto',
  },
  card: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 4,
    boxShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
  },
  media: {
    height: 80,
    width: 80,
  },
});

const getWeekday = (day) => {
  const arrWeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return arrWeekDays[day - 1];
};

function NextFiveDay(props) {
  const classes = useStyles();

  const { weatherFiveDay, hex } = props;

  return (
    <Box className={classes.root}>
      <Typography align="left" variant="h5" component="h2">
        Next 3 day forecast
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {weatherFiveDay.map((day, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            flexDirection="column"
            mt={2}
            py={1}
            className={classes.card}
            style={{
              boxShadow: ` 0 0 10px ${hex}`,
              transition: 'all 1s ease-in',
            }}
          >
            <Typography variant="body2" component="p">
              {moment(day.date).format('DD/MM')}
            </Typography>
            <Typography variant="body2" component="p">
              {getWeekday(moment(day.date).isoWeekday())}
            </Typography>

            <CardMedia
              className={classes.media}
              image={day.day.condition.icon}
              title={day.day.condition.text}
            />

            <p>
              {day.day.mintemp_c}&deg;C - {day.day.maxtemp_c}&deg;C
            </p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NextFiveDay;
