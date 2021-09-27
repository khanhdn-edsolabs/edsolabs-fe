import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/system";
import { DataContext } from "../../../Context/dataContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../helpers/HandlerName";
import { FirstName, LastName } from "../../../helpers/HandlerName";
import Age from "../../../helpers/HandlerDate";
import { Button } from "@mui/material";

const ValueListStudent = (props) => {
  const { DataFilter } = props;
  const { listStudents } = useContext(DataContext);
  const [filtered, setFiltered] = useState(listStudents);
  const [limit, setLimit] = useState(5);

  const loadMore = () => {
    setLimit((x) => x + 6);
  };

  useEffect(() => {
    if (DataFilter) {
      setFiltered(
        listStudents.filter(
          (x) =>
            x.full_name.includes(DataFilter.name) &&
            x.gender.includes(DataFilter.gender) &&
            Age(x.dob).includes(DataFilter.age)
        )
      );
    } else setFiltered(listStudents);
  }, [DataFilter, listStudents]);

  return (
    <Box m={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.slice(0, limit).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{FirstName(row.full_name)}</TableCell>
                <TableCell align="left">{LastName(row.full_name)}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{Age(row.dob)}</TableCell>
                <TableCell align="center">{row.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" m={5}>
        {limit < 25 ? (
          <Button variant="contained" onClick={loadMore}>
            Load More
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ValueListStudent;
