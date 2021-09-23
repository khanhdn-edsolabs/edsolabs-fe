import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const SingleTeam = (props) => {
  const { group } = props;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ '& > *': { fontWeight: 'bold' } }}>
              <TableCell>#</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.map((s, index) => (
              <TableRow
                key={s.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{s.full_name}</TableCell>

                <TableCell align="center">{s.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

SingleTeam.propTypes = {
  group: PropTypes.array,
};

SingleTeam.defaultProps = {
  group: [],
};

export default SingleTeam;
