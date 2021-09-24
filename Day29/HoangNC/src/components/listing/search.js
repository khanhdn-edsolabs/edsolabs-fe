import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./style";
import { useStudentContext } from "../common/studentContext";

export default function Search() {
  const classes = useStyles();
  const {
    searchGender,
    handleChange,
    handleSearchName,
    handleSearchAge,
    handleSearch,
  } = useStudentContext();

  return (
    <div className={classes.search}>
      <div className={classes.searchName}>
        <TextField
          id="outlined-basic"
          label="Search by name...."
          variant="outlined"
          onChange={handleSearchName}
        />
      </div>
      <div className={classes.searchGender}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchGender}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.searchAge}>
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          onChange={handleSearchAge}
        />
      </div>
      <div>
        {" "}
        <IconButton
          size="large"
          aria-label="search"
          color="inherit"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
}
