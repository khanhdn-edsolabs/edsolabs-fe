import React from "react";
import { Box, Grid, Typography, Container, List } from "@material-ui/core";

export default function WeatherToday({ data, display }) {
  return (
    <>
      <Box display={display} border={1} borderRadius={16}>
        <Container>
          <Typography variant="h5" component="h2">
            Today's Weather in {data.location?.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid container item xs={6}>
              <img src={data.current?.condition?.icon} alt="" />
              <Box>
                <Typography variant="h6" component="h4">
                  {data.current?.condition?.text}
                </Typography>
                <Typography variant="h6" component="h4">
                  {data.current?.temp_c} °C
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <List>Wind:{data.current?.wind_kph} kmph</List>
              <List>Precip:{data.current?.precip_mm} mm</List>
              <List>Pressure:{data.current?.pressure_mb} mb</List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
