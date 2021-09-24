import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../components/header';
import { List } from '../components/tabList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Header/>
        <List/>
    </div>
  );
}