import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import getData from '../../api/getData';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  
});
function createGroup(id, fullname, rank) {
  return {id, fullname, rank};
}
export const StudentTeam = () => {
  const classes = useStyles();
  const [ data, setData ] = useState([]);
  useEffect(() => {
    getApi();
  }, [])
  const getApi = () => {
    getData.getAll()
      .then(response => {
        setData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const rows = data.map(item => {
    return createGroup(item.id, item.full_name, item.rank)
  })
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableItem}>#</TableCell>
            <TableCell className={classes.tableItem}  align="left">Full Name</TableCell>
            <TableCell className={classes.tableItem}  align="left">Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.fullname}</TableCell>
              <TableCell align="left">{row.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}