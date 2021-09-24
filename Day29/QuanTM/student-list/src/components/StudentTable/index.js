import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function StudentTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{item.fName}</TableCell>
              <TableCell>{item.lName}</TableCell>
              <TableCell>{item.gender === "M" ? "Male" : "Female"}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
