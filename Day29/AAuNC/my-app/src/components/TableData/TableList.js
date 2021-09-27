import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function TableList(props) {
  const { list } = props;

  const getFirstName = (value) => {
    return value.split(" ")[0];
  };

  const getLastName = (value) => {
    let arr = value.split(" ");
    return arr.slice(1, arr.length).join(" ");
  };

  const getGender = (value) => {
    if (value === "M") return "Male";
    else return "Female";
  };

  const getAge = (value) => {
    let dob = new Date(value);
    let seconds = Date.now() - dob.getTime();
    let datefrom1970 = new Date(seconds);
    let year = datefrom1970.getUTCFullYear();
    return Math.abs(year - 1970);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ background: "#e2e2e2" }}>
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
          {list.map((o, i) => (
            <TableRow key={o.id}>
              <TableCell>{++i}</TableCell>
              <TableCell>{getFirstName(o.full_name)}</TableCell>
              <TableCell>{getLastName(o.full_name)}</TableCell>
              <TableCell>{getGender(o.gender)}</TableCell>
              <TableCell>{getAge(o.dob)}</TableCell>
              <TableCell>{o.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
