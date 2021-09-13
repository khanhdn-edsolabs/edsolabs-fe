import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ForecastInfo from "./ForecastInfo";

const useStyles = makeStyles({
  list: {
    maxWidth: "600px",
  },
});

export default function ForecastList({ list }) {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Next {list.length} days forecast
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={3} className={classes.list}>
        {list.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} key={index}>
              <ForecastInfo info={item} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
