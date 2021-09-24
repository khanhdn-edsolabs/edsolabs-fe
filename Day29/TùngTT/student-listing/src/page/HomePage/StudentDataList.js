import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getData from '../../api/getData';
import moment from 'moment';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundImage: 'repeating-linear-gradient(-45deg,#302f2f,#302f2f 6px,#2a2929 0,#2a2929 12px)',
  },
  tableItem: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
});

function createData(id, firstname, lastname, gender, age, rank) {
  return { id, firstname, lastname, gender, age, rank };
}


export const StudentDataList = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  props.getDataLen(data.length)
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
  const firstName = (fullName) => {
    return fullName.split(' ').slice(0, -1).join(' ');
  }
  const lastName = fullName => {
    return fullName.split(' ').slice(-1).join(' ');
  }
  const age = (value) => {
    return moment().diff(value, 'years');
  } 
  const rows = data.map(item => {
    return createData(item.id, firstName(item.full_name), lastName(item.full_name), item.gender, age(item.dob), item.rank)
  })
  const convertText = text => {
    if(text === "M") {
      return "Male"
    } else if (text === "F") {
      return "Female"
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableItem}>#</TableCell>
            <TableCell className={classes.tableItem}  align="left">First Name</TableCell>
            <TableCell className={classes.tableItem}  align="left">LastName</TableCell>
            <TableCell className={classes.tableItem}  align="left">Gender</TableCell>
            <TableCell className={classes.tableItem}  align="left">Age</TableCell>
            <TableCell className={classes.tableItem}  align="left">Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter(row => {
            if((row.firstname.toLowerCase().includes(props.name.toLowerCase()) 
            || row.lastname.toLowerCase().includes(props.name.toLowerCase()))
            && (convertText(row.gender) === props.gender || (row.age === props.age))) {
              return row
            } else if (props.name === "") {
              return row
            }
          }).slice(0,props.NumRow).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.firstname}</TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">{convertText(row.gender)}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
