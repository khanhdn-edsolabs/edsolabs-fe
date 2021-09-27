import { TextField } from "@mui/material";
import { useState } from "react";

export default function InputText(props) {
  const { type, value, getValue, placeholder } = props;

  const handleChange = (e) => {
    e.preventDefault();
    getValue(e.target.value);
  };

  return (
    <TextField
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ marginLeft: "2%", marginRight: "2%" }}
    />
  );
}
