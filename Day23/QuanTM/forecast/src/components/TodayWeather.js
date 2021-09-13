import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridMedia: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  gridTemp: {
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
    },
  },
  cardMedia: {
    height: "100px",
    width: "100px",
    backgroundSize: "contain",
    backgroundPosition: "center bottom",
  },
  h3: {
    fontWeight: "600",
    fontSize: "2rem",
  },
  h4: {
    fontWeight: "500",
    fontSize: "1rem",
  },
}));

export default function TodayWeather({ currentForecast }) {
  const classes = useStyles();

  const { temp, wind, precip, pressure, text, icon, name, country } =
    currentForecast;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={classes.h3}
        >
          {`Today's weather in ${name}, ${country}`}
        </Typography>
        <Grid container spacing={2}>
          <Grid item container xs={6} spacing={1}>
            <Grid
              item
              container
              xs={12}
              sm={6}
              justifyContent="center"
              alignItems="flex-end"
              className={classes.gridMedia}
            >
              <CardMedia image={icon} className={classes.cardMedia}></CardMedia>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={12}
              sm={6}
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              className={classes.gridTemp}
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.h4}
                  align="center"
                >
                  {text}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.h4}
                  fontWeight="800"
                >
                  {temp}°C
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-end"
            xs={6}
            spacing={2}
          >
            <Grid item>
              <Typography gutterBottom variant="h4" className={classes.h4}>
                Wind: {wind} kmph
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h4" className={classes.h4}>
                Precip: {precip} mm
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h4" className={classes.h4}>
                Pressure: {pressure} mb
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
