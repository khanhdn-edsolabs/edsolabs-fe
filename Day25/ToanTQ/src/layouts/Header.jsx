import React, { useEffect, useState, useRef } from 'react';
import { getApiTag } from '../apis/apiTag';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

import {
  Box,
  FormControl,
  Toolbar,
  ListItem,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    justifyContent: 'flex-end'
  },
  title: {
    padding: '0 0.7rem 0 1.5rem'
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function Header() {
  const [tagName, setTagName] = useState([]);
  const [tag, setTag] = useState([]);
  const classes = useStyles();

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  const handleChange = event => {
    setTagName(event.target.value);
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty('login')) {
      getApiTag()
        .then(res => res.data)
        .then(data => {
          setTag(data);
        });
    }
  }, []);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  let buttonTimer;
  if (isPaused === false) {
    buttonTimer = (
      <Button onClick={handleStart}>
        <PlayCircleOutlineIcon />
      </Button>
    );
  } else {
    buttonTimer = (
      <Button onClick={handlePause}>
        <PauseCircleOutlineIcon />
      </Button>
    );
  }

  return (
    <Box item border={1}>
      <Toolbar>
        <ListItem>
          <TextField id="standard-basic" label="What are you working on" />
        </ListItem>

        <ListItem className={classes.menuButton}>
          <FormControl>
            <Select
              id="tag-mutiple-checkbox"
              multiple
              value={tagName}
              onChange={handleChange}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {tag.map(data => (
                <MenuItem key={data.id} value={data.name}>
                  <Checkbox checked={tagName.indexOf(data.name) > -1} />
                  <ListItemText primary={data.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography className={classes.title} variant="h6">
            {formatTime(timer)}
          </Typography>
          {buttonTimer}
        </ListItem>
      </Toolbar>
    </Box>
  );
}
