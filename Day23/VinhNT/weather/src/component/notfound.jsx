import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    color: '#323934',
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.root}>
      Không tìm thấy địa điểm, vui lòng kiểm tra lại
    </Typography>
  );
}
