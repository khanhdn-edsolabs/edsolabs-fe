import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    margin: "auto",
  },
  cardMedia: {
    height: "100px",
    width: "100%",
    backgroundSize: "contain",
  },
});

export default function ForecastInfo({ info }) {
  const classes = useStyles();
  const { date, temp, icon } = info;

  const dateObj = new Date(date);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    dateObj
  );
  const dateMonth = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
  }).format(dateObj);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography align="center" variants="h4">
              {weekday}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variants="h4">
              {dateMonth}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CardMedia image={icon} className={classes.cardMedia} />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variants="h4">
              {temp}°C
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
