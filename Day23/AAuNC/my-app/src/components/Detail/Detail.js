import './Detail.css'
import { Card, CardHeader, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

export default function Detail(props) {
  const { today } = props;

  return (
    <>
      <Grid component={Card} container justifyContent="center" className="detail">
        <CardHeader title={`Today's Weather in ${today.location.name}, ${today.location.country}`} />
        <Grid container justifyContent="center">
          <Grid item className="detail-left">
            <CardMedia
              component="img"
              alt={today.current.condition.text}
              image={today.current.condition.icon}
              title={today.current.condition.text}
              className="detail-image"
            />
            <div className="detail-summary">
              <Typography component="p">{today.current.condition.text}</Typography>
              <Typography component="p">{`${today.current.temp_c}`} &deg;C</Typography>
            </div>
          </Grid>
          <Grid item className="detail-right">
            <CardContent>
              <Typography component="p">Wind: {today.current.wind_kph} kmph</Typography>
              <Typography component="p">Precip: {today.current.precip_mm} mm</Typography>
              <Typography component="p">Pressure: {today.current.pressure_mb} mb</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>

    </>
  );
}
