import React, { useState, useEffect } from "react";
import {
  TableRow,
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import { getUser } from '../apis/apis';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    MaxWidth: '40%'
  },
  box: {
    marginTop: '40px'
  }
}));
export const StudentTeam = () => {
  const classes = useStyles();
  const [list, setList] = useState();
  useEffect(() => {
    getUser()
      .then((e) => e.data)
      .then((data) => setList(data))
      .catch((err) => err);
  }, []);
  let newArr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let totalArr = [];
  const removeItem = (arr, e) => {
    const index = arr.indexOf(e);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return e;
};
  const group = (e) => {
    const arr = [];
    e.forEach((item) => {
        const index = arr.findIndex((_item) => {
            return _item.rank === item.rank;
        });
        if (index === -1) {
            arr.push(item);
            removeItem(e, item);
        }
    });
    return arr;
}; 
  if (list) {
    newArr = [...list];
    arr1 = group(newArr);
    arr2 = group(newArr);
    arr3 = group(newArr);
    arr4 = group(newArr);
    totalArr.push(arr1, arr2, arr3, arr4, newArr);
  }
  return (
    <Grid container spacing={5}>
        {list &&
          totalArr.map((arr, i) => {
            return (
              <Grid item xs={6} className={classes.box} key={i}>
                <Typography>{`Team ${i + 1}`}</Typography>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Full Name</TableCell>
                      <TableCell>Rank</TableCell>
                    </TableRow>
                  </TableHead>
                  {arr.map((e, index) => {
                    return (
                      <TableBody key={index}>
                        <TableRow>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{e.full_name}</TableCell>
                          <TableCell>{e.rank}</TableCell>
                        </TableRow>
                      </TableBody>
                    );
                  })}
                </Table>
              </Grid>
            );
          })}
      </Grid>
  );
}
