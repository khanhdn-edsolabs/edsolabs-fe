import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography } from '@material-ui/core';
import logo from '../img/logo.png';
import Input from '@material-ui/core/Input';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  text: {
      textAlign:"center",
      fontWeight: 500,
  },
}));


export const Search = ({submitSearch}) => {
  // Get value from Input field
  const [location, setLocation] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    if(!location || location === ''){
      return
    }
    submitSearch(location);
    setLocation('')
  }

  const classes = useStyles();

  const handleClickQuery = () => {
  };

  return (
    <div>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="flex-end">
            <Grid key={1} item>
              <img src={logo} alt="logo"/>
            </Grid>
            <Grid key={2} item>
              <Typography variant="h2" gutterBottom className={classes.text}>
                <span>5-day Forecast</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <form className={classes.root} onSubmit={onSubmit}>
          <Input 
            type="text"
            className={classes.input} 
            placeholder="Nhập thành phố muốn xem" 
            inputProps={{ 'aria-label': 'nhập thành phố muốn xem' }} 
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <IconButton 
            type="submit" 
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </form>
    </div>
  );
}


