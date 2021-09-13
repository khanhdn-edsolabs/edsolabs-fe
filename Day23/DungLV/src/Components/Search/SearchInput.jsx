import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 2px",
    alignItems: "center",
    width: 500,
    borderRadius: "40px",
    marginBottom: "40px",
  },
  title: {
    margin: "40px 0 40px 0",
    fontFamily: "Glory",
    fontWeight: 600,
    letterSpacing: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    "& input": {
      width: "400px",
      fontFamily: "Glory",
      color: "black",
      fontSize: "19px",
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchInput(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const onKeyUp = props.onKeyup;
  const getValueInput = (e) => {
    setValue(e.target.value);
    props.handlerValueInput(e.target.value);
  };
  const handleValueInput = (e) => {
    e.preventDefault();
    props.handleValueForm(value);
    setValue("");
  };
  return (
    <div className={classes.form}>
      <Typography
        variant="h3"
        display="block"
        align="center"
        color="textPrimary"
        className={classes.title}
      >
        Edsolabs 5-Day Forecast
      </Typography>
      <Paper
        component="form"
        className={classes.root}
        onSubmit={handleValueInput}
      >
        <IconButton className={classes.iconButton}>
          <SearchIcon />
        </IconButton>

        <InputBase
          className={classes.input}
          placeholder="Enter the city you want to see"
          onChange={getValueInput}
          value={props.inputValue}
          onKeyUp={onKeyUp}
        />
      </Paper>
    </div>
  );
}
