import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: "20px 0 30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "16px",
    width: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function InputForm({ getData }) {
  const classes = useStyles();
  const [value, setValue] = useState();
  const valueBefore = useRef(value);

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    getData(value);
  };

  const handleSubmit = (e) => {
    if (value === valueBefore || value === undefined) {
      e.stopPropagation();
    }
    e.preventDefault();
  };
  return (
    <Box
      component="form"
      className={classes.root}
      border={1}
      onSubmit={handleSubmit}
    >
      <InputBase
        className={classes.input}
        placeholder="Hà nội,Việt Nam"
        type="search"
        value={value}
        onChange={handleOnchange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleClick}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
