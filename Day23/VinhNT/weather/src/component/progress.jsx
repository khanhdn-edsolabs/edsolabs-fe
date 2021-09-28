import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(5),
  },
  text: {
    marginLeft: theme.spacing(2),
    color: '#323934',
  },
}));
export default function Progress() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size="70px" />
      <Typography className={classes.text}>
        Getting information, please wait...
      </Typography>
    </div>
  );
}
