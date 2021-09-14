import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
  },
}));
export default function Footer (){
  const classes = useStyles();
    return (
      <Typography variant="h2" gutterBottom className={classes.text}>
        Edsolabs 5-Day Forecast
      </Typography>  
    );
}
