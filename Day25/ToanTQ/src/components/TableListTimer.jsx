import React from 'react';
import { TableContainer, Table, TableBody, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListTimer from './ListTimer';
import { splitStr, date } from '../common/convertData';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    alignItems: 'right'
  },
  margin: {
    margin: '3rem 0 0.5rem'
  }
});
const setDateInTask = arr => {
  return Array.from(new Set(arr));
};
export default function TableListTimer({ dataTask }) {
  const classes = useStyles();

  let dateInTask = dataTask.task.filter(o => o.start_time);
  dateInTask = setDateInTask(dateInTask.map(o => splitStr(o.start_time, 0))).sort((a, b) => b - a);

  const data = dateInTask.map(o => {
    return dataTask.task.filter(e => splitStr(e.start_time, 0) === o);
  });
  return (
    <div>
      {data.map(data => {
        return (
          <>
            <Typography className={classes.margin} container="h3">
              {date(data[0].start_time)}
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <ListTimer data={data} dataTask={dataTask} />
                </TableBody>
              </Table>
            </TableContainer>
          </>
        );
      })}
    </div>
  );
}
