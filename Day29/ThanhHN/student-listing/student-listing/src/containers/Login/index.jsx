import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { LoginComponent } from '../../components/LoginComponent';

export const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleLogin = () => {
    var config = {
      method: 'post',
      url: process.env.REACT_APP_LOGIN_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: userInfo,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem('token', response.data.access_token);
        if (localStorage.getItem('token')) {
          history.push('/students/studentList');
        }
      })
      .catch(function (error) {
        alert('bạn nhập sai tài khoản mật khẩu ');
      });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/students/studentList');
    }
  }, [history]);

  return <LoginComponent onChange={handleChange} userInfo={userInfo} onLogin={handleLogin} />;
};
