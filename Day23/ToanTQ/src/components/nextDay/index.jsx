import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container, List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid",
    borderRadius: "16px",
  },
  spacing: {
    marginTop: "20px",
  },
}));

export default function WeatherNextDay({ data, display }) {
  const classes = useStyles();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const getDay = (day) => {
    const newDay = new Date(day);
    return days[newDay.getDay()];
  };

  return (
    <>
      <Box component="div" display={display} className={classes.spacing}>
        <Container>
          <Typography variant="h5" component="h2">
            Next 5 day forecast
          </Typography>
          <Grid
            className={classes.spacing}
            container
            justifyContent="space-between"
          >
            {data.forecast?.forecastday.map((value, index) => (
              <Grid className={classes.root} key={index} item xs={2}>
                <Box textAlign="center">
                  <List>{getDay(value?.date)}</List>
                  <List>
                    <img src={value?.day?.condition?.icon} alt="" />
                  </List>
                  <List>
                    <Typography component="p">
                      {value.day?.maxtemp_c} °C
                    </Typography>
                  </List>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
