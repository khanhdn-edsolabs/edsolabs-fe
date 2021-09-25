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
  Button,
  Box,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  btn: {
    width: "fit-content",
    margin: "50px auto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "120px",
  },
  iconButton: {
    padding: 10,
  },
  box: {
    display: "flex",
    justifyContent: "flex-end",
  },
  error: {
    color: "red",
  },
}));

const splitStr = (str, x) => {
  if (str === null || str === undefined || str === " ") {
    return;
  } else {
    const result = str?.split(" ");
    return result[x];
  }
};
const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

export default function StudentList(props) {
  const classes = useStyles();
  const [student, setStudent] = useState([]);
  const [visible, setVisible] = useState(6);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [errSearch, setErrSearch] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    if (localStorage.hasOwnProperty("accessToken")) {
      getApiUser()
        .then((res) => res.data)
        .then((data) => {
          setStudent(data);
        });
    }
  }, []);

  const handleLoad = () => {
    setVisible((prevValue) => prevValue + 6);
    if (visible > student.length) {
      setDisableBtn(true);
    }
  };

  const handleFilter = () => {
    let data;
    if (name.length === 0 && gender.length === 0 && age.length === 0) {
      return setErrSearch("chua nhap du lieu");
    }
    data = student.filter((o) =>
      o.full_name.toLowerCase().includes(name.toLowerCase())
    );
    if (gender.length !== 0) {
      data = data.filter((o) => o.gender === gender);
    }
    if (age.length !== 0) {
      data = data.filter((o) => getAge(o.dob) + "" === age);
    }
    setStudent(data);
    setErrSearch("");
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box className={classes.box}>
          <FormControl className={classes.formControl}>
            <TextField
              placeholder="search by name..."
              margin="normal"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"M"}>Male</MenuItem>
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={""}>nome</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              margin="normal"
              type="number"
            />
          </FormControl>
          <IconButton onClick={handleFilter} className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box className={classes.box}>
          {errSearch && (
            <Typography className={classes.error} component="span">
              {errSearch}
            </Typography>
          )}
        </Box>
        <ButtonNav />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>FistName</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Rank</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.slice(0, visible).map((o) => (
                <TableRow key={o.id}>
                  <TableCell component="th" scope="o">
                    {o.id}
                  </TableCell>
                  <TableCell>{splitStr(o.full_name, 0)}</TableCell>
                  <TableCell>{splitStr(o.full_name, 1)}</TableCell>
                  <TableCell>{o.gender === "M" ? "Male" : "Female"}</TableCell>
                  <TableCell>{getAge(o.dob)}</TableCell>
                  <TableCell>{o.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {!disableBtn && (
          <Box className={classes.btn}>
            <Button onClick={handleLoad}>Load more Student</Button>
          </Box>
        )}
      </Container>
    </>
  );
}
