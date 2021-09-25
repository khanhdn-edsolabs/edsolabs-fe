/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FormControl, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { postApiUser } from '../apis/apiUser';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  error: {
    color: 'red'
  },
  input: {
    marginTop: '1.5rem'
  },
  paper: {
    width: 'fit-content',
    margin: '4rem auto'
  }
}));

export default function Login() {
  const classes = useStyles();
  const [error, setError] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    postApiUser(username, password)
      .then(res => {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('email', res.data.user.email);
        history.push('/');
        setError('');
      })
      .catch(err => {
        setError('Incorrect password or email');
      });
  };

  return (
    <Paper className={classes.paper} square>
      <form method="" noValidate autoComplete="off">
        <Typography textAlign="center" component="h2" variant="h2">
          Login
        </Typography>
        <FormControl>
          <TextField
            className={classes.input}
            id="userName"
            label="Username"
            variant="outlined"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
          <TextField
            className={classes.input}
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            {error && (
              <Typography className={classes.error} component="span">
                {error}
              </Typography>
            )}
          </div>
          <Button className={classes.input} variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}
