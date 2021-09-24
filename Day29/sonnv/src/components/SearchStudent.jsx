import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const currencies = [
  {
    value: "F",
    label: "Female",
  },
  {
    value: "M",
    label: "Male",
  },
];

const SearchStudent = (props) => {
  const [name, setName] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleStudent = (e) => {
    e.preventDefault();
    props.searchStudentName(name);
    props.searchStudentCurrency(currency);
    props.searchStudentAge(age);
  };
  return (
    <Box
      onSubmit={handleStudent}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid justifyContent="flex-end" display="flex">
        <TextField
          id="filled-search"
          label="Search Name"
          type="search"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-search"
          label="Search Age"
          type="search"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default SearchStudent;
