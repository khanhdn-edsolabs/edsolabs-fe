import React, { useState, useEffect } from "react";
import ButtonNav from "../components/layouts/ButtonNav";
import Header from "../components/layouts/Header";
import { getApiUser } from "../apis/apiUser";

import {
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    MaxWidth: "40%",
  },
  box: {
    marginTop: "40px",
  },
}));

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default function Team() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("accessToken")) {
      getApiUser()
        .then((res) => res.data)
        .then((data) => {
          setStudent(data);
        });
    }
  }, []);
  const classes = useStyles();

  const dataGroupBy = Object.entries(groupBy(student, "rank"));
  const newData = [];
  dataGroupBy.forEach(([key, value]) => {
    newData.push(value);
  });

  const result = [];
  if (newData.length > 0) {
    for (let i = 0; i < newData.length; i++) {
      for (let k = 0; k < newData.length; k++) {
        result.push(newData[k][i]);
      }
    }
  }
  const dataTeam = [];
  const chunkArray = (myArray, chunk_size, tempArray) => {
    for (let i = 0; i < myArray.length; i += chunk_size) {
      const myChunk = myArray.slice(i, i + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  };
  chunkArray(result, 5, dataTeam);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <ButtonNav />
        {dataTeam.map((o, i) => (
          <Box className={classes.box}>
            <Typography>Team {i + 1}</Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Rank</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {o.map((e) => (
                    <TableRow key={e.id}>
                      <TableCell component="th" scope="o">
                        {e.id}
                      </TableCell>
                      <TableCell>{e.full_name}</TableCell>
                      <TableCell>{e.rank}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Container>
    </>
  );
}
