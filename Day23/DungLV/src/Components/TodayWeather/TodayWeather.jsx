import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  body: {
    fontFamily: "Glory",
    padding: "0px",
    fontWeight: 600,
    margin: "25px 0px 0px 0px",
    fontSize: 20,
  },
  root: {
    borderRadius: "40px",
    marginBottom: "40px",
    padding: "0px",
  },
  media: {
    width: 108,
    height: 204,
    backgroundSize: "115px 115px",
    marginLeft: 55,
  },
  contentToday: {
    display: "flex",
    width: 555,
  },
  temp: {
    width: "200px",
    marginTop: "70px",
  },
  tempx: {
    fontSize: 30,
    fontWeight: 600,
    fontFamily: "Glory",
    marginLeft: 10,
  },
  title: {
    fontFamily: "Glory",
    marginTop: 12,
    fontWeight: 600,
  },
  text: {
    fontSize: 21,
    fontWeight: 600,
    fontFamily: "Glory",
    marginLeft: 10,
  },
});

export default function TodayWeather(props) {
  const classes = useStyles();
  const renderUIToday = props.valueCurrent.map((item, index) => {
    return (
      <Card className={classes.root} key={index}>
        <CardActionArea>
          <Typography variant="h4" align="center" className={classes.title}>
            Today's Weather in {item.location.name}, {item.location.country}
          </Typography>
          <div className={classes.contentToday}>
            <CardMedia
              className={classes.media}
              image={item.current.condition.icon}
            />
            <div className={classes.temp}>
              <Typography className={classes.text}>
                {item.current.condition.text}
              </Typography>
              <Typography className={classes.tempx}>
                {item.current.temp_c} &deg;C
              </Typography>
            </div>
            <CardContent>
              <Typography color="textSecondary" className={classes.body}>
                Wind: {item.current.wind_kph} kmph
              </Typography>
              <Typography color="textSecondary" className={classes.body}>
                Precip: {item.current.precip_mm} mm
              </Typography>
              <Typography color="textSecondary" className={classes.body}>
                Pressure: {item.current.pressure_mb} mb
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    );
  });
  return <div className={classes.contentToday}>{renderUIToday}</div>;
}
