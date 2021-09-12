import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
  },
  loader: {
    border: "0.5rem solid #f3f3f3",
    borderTop: "0.5rem solid #3498db",
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  typo: {
    fontSize: "1.2rem",
  },
});

export default function Loader() {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={3}
      className={classes.root}
    >
      <Grid item className={classes.loader}></Grid>
      <Grid item>
        <Typography className={classes.typo}>
          Getting information, please wait...
        </Typography>
      </Grid>
    </Grid>
  );
}
