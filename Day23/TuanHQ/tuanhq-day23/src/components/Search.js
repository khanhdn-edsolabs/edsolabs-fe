import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  InputBase,
  InputAdornment,
  FormHelperText,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px auto',
    paddingTop: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },

  title: {
    textAlign: 'center',
    letterSpacing: '4px',
    textShadow: '0px 0px 10px #ffffff',
  },

  input: {
    maxWidth: 500,
    margin: '0px auto',
    padding: '4px 10px',
    border: '1px solid #ccc',
    borderRadius: 40,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  inputFocus: {
    boxShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
  },

  inputError: {
    color: 'red',
    paddingLeft: 32,
  },
}));

function Search(props) {
  const classes = useStyles();

  const { changeCity, cityIncorrect } = props;

  const [valueSearch, setValueSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changeCity(valueSearch);
  };

  return (
    <Grid className={classes.root}>
      <h1 className={classes.title}>Edsolabs 5-Day Forecast</h1>
      <form className={classes.input} onSubmit={handleSubmit}>
        <InputBase
          placeholder="Enter your city..."
          fullWidth
          variant="outlined"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {cityIncorrect && (
          <FormHelperText p={2} className={classes.inputError}>
            City not found!
          </FormHelperText>
        )}
      </form>
    </Grid>
  );
}

export default Search;
