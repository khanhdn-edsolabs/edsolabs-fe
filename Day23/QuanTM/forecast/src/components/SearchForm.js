import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchForm(props) {
  const [term, setTerm] = useState("");
  const { name, placeholder } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        required
        fullWidth
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        variant="outlined"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}
