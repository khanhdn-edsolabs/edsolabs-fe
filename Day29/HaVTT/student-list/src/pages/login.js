import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { getUser } from "../apis/apis";
import { 
  Paper,
  Typography,
  Button,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 40px',
    marginTop: '50px',
    borderRadius: '25px',
    width: '40%',
    margin: 'auto',
  },
  form: {
    marginTop: '50px',
    padding: '2px 4px',
    border: '2px soild',
    alignItems: 'center',
    alignSelf : 'center',
  },
  p: {
    textAlign: 'left',
    marginLeft: '15px',
  },
  input: {
    width: '90%',
    borderRadius: '5px',
    border: '2px soild',
    padding: '6px 8px',
    marginBottom: '5px',
  },
  btn: {
    marginTop: '30px',
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const aut = async () => {
    const res = await getUser(email, password);
    const { data } = res;
    console.log(data);
    if (data.length === 0 || data.length > 1) {
      alert("Tài khoản hoặc mật khẩu không chính xác");
      return;
    }
    if (email === "admin@gmail.com") {
      history.push("/");
    } else {
      alert("Tài khoản không tồn tại");
    }
  };
  const handleLogin = (e) => {
    localStorage.setItem("email", email);
    aut();
  };
  return (
    <Paper className={classes.root}>
        <Typography variant="h3" align="center">
        Admin login
        </Typography>
        {/* {error && <div className={classes.error}>{error}</div>} */}
        <form className={classes.form}>
            <p className={classes.p}>Email:</p>
            <input
            className={classes.input}
            placeholder={'Email'}
            onChange={(event) => setEmail(event.target.value)}
            />
            <p className={classes.p}>Password:</p>
            <input
            className={classes.input}
            placeholder={'Password'}
            onChange={(event) => setPassword(event.target.value)}
            />
            <Button 
                className={classes.btn} 
                variant="contained" 
                onClick={handleLogin}
            >
                Login
            </Button>
        </form>
    </Paper>
  );
}