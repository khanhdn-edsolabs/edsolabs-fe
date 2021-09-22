/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FormControl, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getApiUser } from '../apis/apiUser';
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
  const [user, setUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getApiUser()
      .then(res => res.data)
      .then(data => {
        setUser(data);
      })
      .catch(err => setError(err));
  }, []);

  const createToken = () => {
    const Rand = () => {
      return Math.random().toString(36).substr(2);
    };
    return Rand() + Rand();
  };

  const handleLogin = () => {
    if (user[0].username === username && user[0].password === password) {
      setError('');
      localStorage.setItem('login', createToken());
      history.push('/');
    } else {
      setError('sai mật khẩu hoặc tài khoản');
    }
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
          <Button type="submit" className={classes.input} variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}
