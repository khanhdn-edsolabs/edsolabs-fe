import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { getStudent } from '../utils/common';
import { useEffect, useState } from 'react';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, firstname, lastname, gender, age, rank) {
  return { id, firstname, lastname, gender, age, rank };
}

const rows = [
  createData('1', 'Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('2', 'Elissa', 'Dennis', 'M' , "6/19/2000" ,3),
  createData('3', 'Ker', 'Lamort', 'M' , "3/29/1975" ,5),
  createData('4', 'Ludovika', 'Cassley', 'F' , "2/21/1973" ,1),
  createData('5', 'Neilla', 'Riggs', 'M' , "6/19/1984" ,1),
  createData('6', 'Hestia', 'Charlson', 'M' ,"9/29/1970" ,1),
  createData('7', 'Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('8', 'Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('9', 'Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('10','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('11','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('12','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('13','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('14','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
  createData('15','Sampson', 'Aucourte', 'M' , "2/3/1973" ,5),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function StudentData() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState([]);
  useEffect(() => {
    getApi();
  }, [])
  const getApi = () => {
    getStudent()
      .then(response => {
        setData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
    
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
          
            <TableCell align="right">FirtName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">AGE</TableCell>
            <TableCell align="right">Rank</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.firstname}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.lastname}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.gender}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.age}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.rank}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
