import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  body: {
    fontFamily: "Glory",
    marginBottom: 0,
    padding: 0,
    fontWeight: 600,
  },
  root: {
    maxWidth: 345,
    padding: 20,
    borderRadius: "40px",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  title: { marginBottom: "40px", fontFamily: "Glory" },
  media: {
    height: 120,
    width: 110,
    fontFamily: "Glory",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: "25px",
  },
  day: {
    fontFamily: "Glory",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const render = props.listWeather.map((item, index) => {
     function getDayOfWeek(date) {
       const week = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ]
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek) ? null : week[dayOfWeek];
    }
    return (
      <Card className={classes.root} key={index}>
        <Typography className={classes.day}>
          {getDayOfWeek(item.date)}
        </Typography>
        <Typography className={classes.day}>{item.date}</Typography>
        <CardMedia
          className={classes.media}
          image={item.day.condition.icon}
          title="Contemplative Reptile"
        />

        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className={classes.body}
        >
          {item.day.avgtemp_c} &deg;C
        </Typography>
      </Card>
    );
  });

  return (
    <div className={classes.body}>
      <Typography variant="h3" align="left" className={classes.title}>
        Next 5 Days ForeCast
      </Typography>
      <div className={classes.content}>{render}</div>
    </div>
  );
}
