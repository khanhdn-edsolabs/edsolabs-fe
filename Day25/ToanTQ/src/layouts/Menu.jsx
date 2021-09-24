/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Box, List, Grid, Container } from '@material-ui/core';
import ListItemMenu from '../components/ListItemMenu';
import { makeStyles } from '@material-ui/core/styles';
import { getIconState } from '../common/dataTag';
import { getApiUser } from '../apis/apiUser';
import { ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    background: '#2a3042',
    boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)',
    height: '100vh',
    color: '#545a6d'
  },
  img: {
    maxWidth: '50%',
    borderRadius: '5px'
  }
});

export default function Menu() {
  const classes = useStyles();
  const [menu, setMenu] = useState([]);
  const [checkLogin, setCheckLogin] = useState(false);
  let button;
  let avatar;

  useEffect(() => {
    if (localStorage.hasOwnProperty('login')) {
      getApiUser()
        .then(res => res.data)
        .then(data => {
          setMenu(data);
          setCheckLogin(true);
        });
    }
  }, []);
  const iconState = getIconState(setCheckLogin);

  if (checkLogin === true) {
    avatar = <img className={classes.img} src={menu[0]?.avatar} alt="" />;
    button = <ListItemMenu props={iconState.logout} />;
  } else {
    avatar = <AccountCircleIcon />;
  }
  return (
    <>
      <Grid xs={2}>
        <Box item className={classes.root}>
          <List component="nav">
            <ListItem>
              <ListItemIcon>{avatar}</ListItemIcon>
              <ListItemText primary={menu[0]?.username} />
            </ListItem>
          </List>

          <List component="nav">
            <ListItemMenu props={iconState.timer} />
            <ListItemMenu props={iconState.report} />
            <ListItemMenu props={iconState.logout} />
          </List>
        </Box>
      </Grid>
    </>
  );
}
