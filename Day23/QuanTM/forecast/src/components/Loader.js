import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
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
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>
        <Typography className={classes.typo}>
          Getting information, please wait...
        </Typography>
      </Grid>
    </Grid>
  );
}
