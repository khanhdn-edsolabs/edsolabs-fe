import React, { useEffect, useState } from 'react';
import getData from '../apis/getData';
import {Paper,Grid,Table,TableRow,TableHead,TableContainer,TableCell,TableBody} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({

});
function createGroup(id, full_name, rank) {
  return {id, full_name, rank};
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
  const sortArr = rows.sort((a,b) => {
    return a.rank - b.rank
  })
  let arrGroup = [];
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
              {item.map((stu, index, arr) =>(
                <TableRow key={index}>
                  <TableCell>
                    {index+1}
                  </TableCell>
                  <TableCell align="left">{stu.full_name}</TableCell>
                  <TableCell align="left">{stu.rank}</TableCell>
                </TableRow>
              ))} 
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
    </Grid>
  )
} 