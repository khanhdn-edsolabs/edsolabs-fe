import { Container, TableContainer, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useHistory } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { MyTableContainer } from "./styled";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function StudentTeam() {
  const [listStudents, setListStudents] = React.useState([]);

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:8000/students",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios(config)
      .then((response) => {
        const groupListStudent = (data) => {
          const emtyArr = [];
          const dem = Math.ceil(data.length / 5);
          for (let i = 0; i < dem; i++) {
            const newArr = [];
            if (newArr.length < 5) {
              data.forEach((student, index) => {
                if (
                  newArr.every(
                    (item) =>
                      item.full_name !== student.full_name &&
                      item.rank !== student.rank
                  )
                ) {
                  newArr.push(student);
                  data.splice(index, 1, {});
                }
              });
            }

            emtyArr.push(newArr);
          }
          return emtyArr.map((item) =>
            item.filter((subItem) => Object.keys(subItem).length > 0)
          );
        };
        setListStudents(groupListStudent(response.data));
      })
      .catch((error) => {
        alert("Token timeout please login again");
        localStorage.removeItem("access_token");
        useHistory.push("/");
      });
  }, []);

  const test = [...listStudents];
  const row = test.map((item, index) => {
    return (
      <TableContainer key={index}>
        <Typography sx={{ margin: "0 auto" }}>Nhóm : {index + 1}</Typography>
        <MyTableContainer component={Paper}>
          <MyTableContainer aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="center">FullName</StyledTableCell>
                <StyledTableCell align="center">Rank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.map((x, i) => {
                return (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {i + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {x.full_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{x.rank}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </MyTableContainer>
        </MyTableContainer>
      </TableContainer>
    );
  });

  return <Container>{row}</Container>;
}
