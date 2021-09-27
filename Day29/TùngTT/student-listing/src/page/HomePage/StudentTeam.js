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
export const StudentTeam = (props) => {
  const classes = useStyles();
  const [ data, setData ] = useState([]);

  const rows = props.data.map(item => {
    return createGroup(item.id, item.full_name, item.rank)
  }) 
  const sortArr = rows.sort((a,b) => {
    return a.rank - b.rank
  })
  var arrGroup = [];
  for(let i = 0;i < 5; i++) {
    arrGroup.push(sortArr[i+0])
    arrGroup.push(sortArr[i+5])
    arrGroup.push(sortArr[i+10])
    arrGroup.push(sortArr[i+15])
    arrGroup.push(sortArr[i+20])
  }
  const group = arrGroup.reduce((r, e, i) =>
    (i % 5 ? r[r.length - 1].push(e) : r.push([e])) && r
  , []);
  return (
    <>
    {  
    <Grid container spacing={5}>
      { group.map((item,index) => (
        <Grid item xs={6} key={index}>
          <h5>Team{index+1}</h5>
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
              {item.map((row,index) =>(
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell align="left">{row.fullname}</TableCell>
                  <TableCell align="left">{row.rank}</TableCell>
                </TableRow>
              ))} 
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
    </Grid>}
    </>
  )
}