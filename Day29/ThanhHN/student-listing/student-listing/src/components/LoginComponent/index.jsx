import { Button, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const LoginComponent = ({ onChange = () => {}, userInfo = {}, onLogin = () => {} }) => {
  return (
    <Wrapper>
      <h2 className="header">Admin login</h2>
      <div className="inputLogin">
        <h4>Email:</h4>
        <TextField
          variant="outlined"
          type="text"
          fullWidth
          name="email"
          onChange={onChange}
          value={userInfo.username}
        />
      </div>

      <div className="inputLogin">
        <h4>Password:</h4>
        <TextField
          variant="outlined"
          type="password"
          fullWidth
          name="password"
          onChange={onChange}
          value={userInfo.password}
        />
      </div>
      <div className="button">
        <Button variant="outlined" color="success" type="button" onClick={onLogin}>
          Login
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  max-height: 350px;
  border: 2px solid #000;
  margin: auto;
  margin-top: 20vh;
  padding: 50px 40px 20px 40px;

  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .inputLogin {
    width: 100%;
    margin-bottom: 20px;

    h4 {
      margin-bottom: 5px;
    }

    input {
      padding: 10px 20px;
      border: 2px solid #000;
    }

    fieldset {
      border: none;
    }
  }

  .button {
    text-align: center;

    button {
      color: #000;
      border-radius: 0;
      border: 2px solid #000;
      padding: 5px 25px;
    }
  }
`;
