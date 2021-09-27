import { useState } from "react";
import { FormControl, Select } from "@mui/material";

export default function SelectBox(props) {
  const { value, getSelect } = props;

  const handleChange = (event) => {
    getSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" style={{ width: "150px" }}>
        <Select
          native
          value={value}
          onChange={handleChange}
          inputProps={{
            id: "outlined-age-native-simple",
          }}
        >
          <option value="">Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </Select>
      </FormControl>
    </div>
  );
}
