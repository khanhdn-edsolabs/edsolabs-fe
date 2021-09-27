import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { auth } from "apis/signInAPI";
import { useGlobalContext } from "components/GlobalContext";
import history from "historyObj";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[3],
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: "0.5rem",
  },
  button: {
    margin: "auto",
    marginTop: "1rem",
  },
}));

export default function LogInForm() {
  const classes = useStyles();
  const { setUser } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await auth({
        email: email.trim(),
        password: password.trim(),
      });
      setUser(res.data);
      history.push("/");
    } catch (err) {
      if (err.response.status === 400) {
        alert("Incorrect email or password");
      } else {
        alert(err.response.data);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <form method="post" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h5" component="h1">
            Admin Login
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            variant="outlined"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
}
