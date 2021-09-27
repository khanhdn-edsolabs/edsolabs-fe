import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  const loginAdmin = () => {
    history.push('/login');
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        height: 40,
        lineHeight: '40px',
        textAlign: 'right',
        display: 'flex',
      }}
    >
      <Container fixed>
        <Typography variant="subtitle1" gutterBottom component="span">
          Welcome, Admin
        </Typography>

        <Button color="secondary" variant="outlined" onClick={loginAdmin}>
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
