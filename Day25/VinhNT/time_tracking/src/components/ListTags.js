import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: theme.spacing(9),
    right: theme.spacing(17),
  },
}));
export default function ListTags(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {props.tags.map((value, index) => {
        const labelId = `${value}`;

        return (
          <>
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon key={index + 0.1}>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={() => props.update(checked)}
                />
              </ListItemIcon>
              <ListItemText key={index + 0.2} id={labelId} primary={value} />
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
