import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import SearchStudent from "../components/SearchStudent";
import moment from "moment";
import { getAllStudent, selectStudent } from "../features/ListStudentSlice";
import { Button } from "@mui/material";

const StudentList = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [value, setValue] = useState(6);
  const dispatch = useDispatch();
  const listStudent = useSelector(selectStudent);

  const ageStudent = (val) => {
    return moment().diff(val, "years");
  };

  const showMoreData = () => {
    setValue((item) => item + 6);
  };
  console.log(value);
  const searchStudentName = (e) => {
    setName(e);
  };
  const searchStudentCurrency = (e) => {
    setGender(e);
  };
  const searchStudentAge = (e) => {
    setAge(e);
  };

  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);
  return (
    <Wrapper>
      <SearchStudent
        searchStudentName={(e) => searchStudentName(e)}
        searchStudentCurrency={(e) => searchStudentCurrency(e)}
        searchStudentAge={(e) => searchStudentAge(e)}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listStudent
              ?.slice(0, value)
              .filter((val) => {
                if (
                  (val.full_name.toLowerCase().includes(name.toLowerCase()) &&
                    val.gender === gender) ||
                  (val.full_name.toLowerCase().includes(name.toLowerCase()) &&
                    ageStudent(val.dob) === age)
                ) {
                  return val;
                } else if (name === "") {
                  return val;
                }
              })
              .map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="center">
                    {item.full_name.split(" ").slice(0, -1).join(" ")}
                  </TableCell>
                  <TableCell align="center">
                    {item.full_name.split(" ").slice(-1).join(" ")}
                  </TableCell>
                  <TableCell align="center">
                    {item.gender === "M" ? "Male" : "Female"}
                  </TableCell>
                  <TableCell align="center">
                    {moment().diff(item.dob, "years")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        disabled={value >= 25 ? true : false}
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={showMoreData}
      >
        {value >= 25 ? "Disabled" : "Load More"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`;

export default StudentList;
