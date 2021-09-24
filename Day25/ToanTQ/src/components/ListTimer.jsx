/* eslint-disable array-callback-return */
import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListDrop from './ListDrop';
import { splitStr } from '../common/convertData';
const useStyles = makeStyles({});

export default function ListTimer({ dataTask, data }) {
  const classes = useStyles();
  return (
    <>
      {data.map(o => {
        return (
          <>
            <TableRow key={o.id} className={classes.row}>
              <TableCell>{o.description}</TableCell>
              <TableCell align="right">
                {o.tags.map(e => {
                  return dataTask.tag.map(o => {
                    if (o.id === e) {
                      return o.name + ' ';
                    }
                  });
                })}
              </TableCell>
              <TableCell align="right">
                {splitStr(o.start_time, 1)}
                {o.end_time !== null ? '-' + splitStr(o.end_time, 1) : ' '}
              </TableCell>
              <TableCell align="right">{o.time_spent}</TableCell>
              <TableCell align="right">
                <ListDrop />
              </TableCell>
            </TableRow>
          </>
        );
      })}
    </>
  );
}
