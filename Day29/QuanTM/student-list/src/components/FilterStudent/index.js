import React, { useState } from "react";
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    height: 40,
  },
}));

export default function FilterStudent(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFilter({
      name: name.toLowerCase().trim(),
      gender,
      age: +age,
    });
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Grid
        container
        columnSpacing={3}
        rowSpacing={1}
        justifyContent="flex-end"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item xs={12} md={4} className={classes.gridItem}>
          <TextField
            fullWidth
            id="username"
            label="Search by name"
            name="name"
            autoComplete="name"
            variant="outlined"
            size="small"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid item xs={6} md={2} className={classes.gridItem}>
          <FormControl fullWidth size="small">
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="">Gender</MenuItem>
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={2} className={classes.gridItem}>
          <TextField
            fullWidth
            id="username"
            label="Age"
            name="age"
            autoComplete="age"
            variant="outlined"
            size="small"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </Grid>
        <Grid item xs={12} md={2} className={classes.gridItem}>
          <Button
            variant="contained"
            type="Submit"
            fullWidth
            className={classes.button}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
