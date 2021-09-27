import React, { useState } from 'react'
import {
  TextField,
  Container,
  Typography,
  Button,
  Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
// import loginAPI from '../../services/loginAPI'
import action from '../../services/action'
const useStyle = makeStyles((theme) => ({
  form: {
    width: '40%',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
  },
}))
export default function LogInForm() {
  const classes = useStyle()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authentication = async () => {
    let data = {
      email: email.trim(),
      password: password.trim(),
    }
    console.log(data.email)
    console.log(data.password)
    action.Login(data).then((res) => console.log(res))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const token = await loginUser({
    //   email,
    //   password,
    // });
    // setToken(token);
    // history.push('./');
    authentication()
  }
  return (
    <Card elevation={10} className={classes.form}>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center">
          Admin login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            label="Password"
            placeholder="Enter password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" className={classes.button} type="submit">
            Login
          </Button>
        </form>
      </Container>
    </Card>
  )
}
