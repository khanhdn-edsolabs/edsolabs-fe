import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import ValueListStudent from "./ValueListStudent";

// Value Sex
const sex = [
  {
    value: "M",
    label: "Male",
  },
  {
    value: "F",
    label: "Female",
  },
  {
    value: "",
    label: "No",
  },
];

const ListStudent = () => {
  // State
  const [valueSex, setValueSex] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [valueFilter, setValueFilter] = useState(false);

  // Handler change selectbox
  const handleChange = (event) => {
    setValueSex(event.target.value);
    setGender(event.target.value);
  };

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const getDataFilter = () => {
    if (name === "" && gender === "" && age === "") {
      setValueFilter(false);
    } else {
      const dataFilterr = {
        name,
        gender,
        age,
      };
      setValueFilter(dataFilterr);
    }
  };
  return (
    <Box width="100%">
      <Box
        className="filer"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          alignItems="center"
        >
          <TextField
            id="outlined-basic"
            label="Search by Name..."
            variant="outlined"
            onChange={handlerChangeName}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Gender"
            value={valueSex}
            onChange={handleChange}
          >
            {sex.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            style={{ width: 100 }}
            onChange={handleChangeAge}
          />
          <SearchIcon
            onClick={getDataFilter}
            style={{ width: "100px", height: "40px" }}
          />
        </Box>
      </Box>
      <Box
        className="content-list"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <ValueListStudent DataFilter={valueFilter} />
      </Box>
    </Box>
  );
};

export default ListStudent;
