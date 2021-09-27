import { Button, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const HeaderComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();

  const handleTabClick = (e) => {
    if (e.target.innerText === 'STUDENTS LIST') {
      history.push('/students/studentList');
    }

    if (e.target.innerText === 'TEAMS') {
      history.push('/students/studentTeam');
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <Wrapper>
      <div className="header">
        <span>Welcome, Admin</span>
        <div className="icon">
          <RiArrowDownSLine />
        </div>
      </div>
      <div className="logout">
        <Button variant="outlined" color="success" onClick={handleLogOut}>
          Logout
        </Button>
      </div>

      <div className="navbar">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            label="Students List"
            onClick={handleTabClick}
            className={value === 0 ? 'active' : ''}
            value={0}
          />
          <Tab
            label="Teams"
            onClick={handleTabClick}
            className={value === 1 ? 'active' : ''}
            value={1}
          />
        </Tabs>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .header {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    background-color: #dddddd;
    border: 2px solid #000;
    padding-right: 80px;
    font-weight: 500;
  }

  .icon {
    svg {
      width: 20px;
      height: 20px;
      margin-bottom: -5px;
    }
  }

  .logout {
    position: absolute;
    right: 80px;
    top: 45px;
    background-color: #fff;

    button {
      color: #000;
      border-radius: 0;
      border: 2px solid #000;
      padding: 5px 25px;
    }
  }

  .navbar {
    margin-top: 40px;
    height: 40px;
    overflow: hidden;

    button {
      border: 2px solid #000;
      border-radius: 10px;
      border-bottom: none;

      &:last-child {
        border-left: none;
      }
    }
  }

  .active {
    background-color: #ccc;
    color: #000 !important;
  }
`;
