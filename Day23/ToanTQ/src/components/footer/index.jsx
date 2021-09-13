import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Portal from "@material-ui/core/Portal";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  icon: {
    verticalAlign: "middle",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} align="center">
      @ 2021 by FE class. Made with{" "}
      <FavoriteIcon fontSize="small" className={classes.icon} /> by
      {process.env.REACT_APP_AUTHOR_NAME}
    </Typography>
  );
}
