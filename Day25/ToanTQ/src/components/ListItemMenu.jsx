import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import IconListMenu from './IconListMenu';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

export default function ListItemMenu(icons) {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={icons.props.link}>
      <ListItem button onClick={icons.props.func}>
        <ListItemIcon>
          <IconListMenu icon={icons} />
        </ListItemIcon>
        <ListItemText primary={icons.props.title} />
      </ListItem>
    </Link>
  );
}
