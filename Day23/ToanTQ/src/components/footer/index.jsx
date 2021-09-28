import React from "react";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
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
      <FavoriteIcon fontSize="small" className={classes.icon} /> by{" "}
      {process.env.REACT_APP_AUTHOR_NAME}
    </Typography>
  );
}
