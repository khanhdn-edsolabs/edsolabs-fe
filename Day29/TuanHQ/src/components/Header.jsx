import { Box, Container } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        height: 40,
        lineHeight: '40px',
        textAlign: 'right',
      }}
    >
      <Container fixed>Welcome, Admin</Container>
    </Box>
  );
};

export default Header;
