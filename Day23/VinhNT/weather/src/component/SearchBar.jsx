import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    width: '75%',
    alignSelf : 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color : '#323934'

  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit()
  };
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <Typography  variant="h2" gutterBottom className={classes.text}>
        {props.appName}
      </Typography>
      <Paper component="form" onSubmit={handleSubmit} className={classes.form}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder={'Nhập thành phố muốn xem'}
          value={props.text}
          onChange={handleChange}
        />
      </Paper>
    </>
  );
}
