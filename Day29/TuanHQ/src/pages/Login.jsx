import {
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleLogin = () => {
    history.replace('/');
    // axios
    //   .post(`${process.env.REACT_APP_LOCAL_API_URL}/users`, {
    //     email: 'admin@gmail.com',
    //     password: 'admin',
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <Paper sx={{ maxWidth: '500px', margin: ' 100px auto', padding: '20px' }}>
      <Box
        sx={{
          '& > .MuiTextField-root': {
            margin: '10px 0px',
          },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          component="div"
        >
          Login Admin
        </Typography>

        <InputLabel color="secondary">Email:</InputLabel>

        <TextField
          type="email"
          id="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputLabel color="secondary">Password:</InputLabel>

        <TextField
          type="password"
          id="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          sx={{ width: '160px', margin: '0px auto' }}
          color="secondary"
          variant="outlined"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Paper>
  );
};

// Login.propTypes = {};

export default Login;
