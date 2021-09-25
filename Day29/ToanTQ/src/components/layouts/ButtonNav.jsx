import React from "react";
import { ButtonGroup, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    margin: "50px auto",
  },
  btn: {
    width: "140px",
    padding: "0",
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
    width: "100%",
    padding: "6px 16px",
  },
}));

export default function ButtonNav() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ButtonGroup variant="contained" color="primary">
        <Button className={classes.btn}>
          <Link className={classes.link} to="/">
            Student List
          </Link>
        </Button>
        <Button className={classes.btn}>
          <Link className={classes.link} to="/team">
            Teams
          </Link>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
