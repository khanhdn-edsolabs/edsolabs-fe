import 'date-fns';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TableListTimer from '../components/TableListTimer';
import { getApiTask } from '../apis/apiTask';
import Header from '../layouts/Header';
import { makeStyles } from '@material-ui/core/styles';
import { getApiTag } from '../apis/apiTag';
import { getThisDate, splitStr } from '../common/convertData';

const useStyles = makeStyles({
  root: {
    marginLeft: '2rem'
  }
});

export default function Timer() {
  const [selectedDate, setSelectedDate] = useState();
  const [task, setTask] = useState([]);
  const classes = useStyles();
  const [tag, setTag] = useState([]);
  const [taskClone, setTaskClone] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty('login')) {
      getApiTask()
        .then(res => res.data)
        .then(data => {
          setTask(data);
          setTaskClone(data);
        });
      getApiTag()
        .then(res => res.data)
        .then(data => {
          setTag(data);
        });
    }
  }, []);

  const handleDateChange = date => {
    setTask(taskClone);
    setSelectedDate(getThisDate(date));
    if (task.length === taskClone.length) {
      setTask(task.filter(o => splitStr(o.start_time, 0) === getThisDate(date)));
    }
  };

  return (
    <Grid xs={10}>
      <Header />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box className={classes.root} container>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Filter Day"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
          <Typography component="h2"> Timer</Typography>
          <TableListTimer dataTask={{ task, tag }} />
        </Box>
      </MuiPickersUtilsProvider>
    </Grid>
  );
}
