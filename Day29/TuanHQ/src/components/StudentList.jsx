import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { countingAge } from 'utils/dob';

const studentPerPage = 6;
let holdingStudent = [];

const StudentList = (props) => {
  const { listStudentsFiltered } = props;

  const [listStudentDisplay, setListStudentDisplay] = useState([]);

  const [next, setNext] = useState(5);

  const listInit = [...listStudentsFiltered];

  const sliceListDisplay = (start, end, list = listInit) => {
    const sliceDays = list.slice(start, end);

    holdingStudent = [...holdingStudent, ...sliceDays];

    setListStudentDisplay(holdingStudent);
  };

  const loadMoreDays = () => {
    sliceListDisplay(next, next + studentPerPage);
    setNext(next + studentPerPage);
  };

  useEffect(() => {
    holdingStudent = [];
    setNext(5);
    sliceListDisplay(0, 5);
  }, [listStudentsFiltered]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ '& > *': { fontWeight: 'bold' } }}>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listStudentDisplay.map((s, index) => (
              <TableRow
                key={s.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  {s.full_name.split(' ').slice(0, -1).join(' ')}
                </TableCell>
                <TableCell>
                  {s.full_name.split(' ').slice(-1).join(' ')}
                </TableCell>
                <TableCell>{s.gender === 'M' ? 'Male' : 'Female'}</TableCell>
                <TableCell align="center">{countingAge(s.dob)}</TableCell>
                <TableCell align="center">{s.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {listStudentsFiltered.length - next > 0 && (
        <Box sx={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={loadMoreDays}>
            Load more +{' '}
            {listStudentsFiltered.length - next > 5
              ? 5
              : listStudentsFiltered.length - next}
          </Button>
        </Box>
      )}
    </div>
  );
};

StudentList.propTypes = {
  listStudents: PropTypes.array,
};

StudentList.defaultProps = {
  listStudents: [],
};

export default StudentList;
