import React, { useState, useEffect } from 'react'
import '../../style/login.scss'
import { TextField, Button, Divider, Box } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import CheckBox from '@mui/material/Checkbox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material//CheckBox'
import PersonAdd from '@mui/icons-material//PersonAdd'
import PersonPinIcon from '@mui/icons-material//PersonPin'
import LockOpenIcon from '@mui/icons-material//LockOpen'
import SendIcon from '@mui/icons-material//Send'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container } from '@mui/material'

function Login (props) {
  const [error, setError] = useState(null)
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_USERS}`)
      .then(res => res.data)
      .then(e => {
        setData(e)
        // console.log(e)
      })
  }, [])

  function handleClickOnButton () {
    setError(null)
    if (email.trim() === '' || password.trim() === '') {
      setError(
        Swal.fire(
          'Oopps...!',
          'You must entered your email or password!',
          'info'
        )
      )
    } else if (email !== data[0].email || password !== data[0].password) {
      setError(
        Swal.fire(
          'Failed...!',
          'You entered wrong your email or password!',
          'error'
        )
      )
    } else {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      props.history.push('/my_tab')
    }
  }

  return (
    <div>
      <Container maxWidth='xs'>
        <div className='login'>
          <div className='icon'>
            <div className='icon-class'>
              <PersonAdd fontSize='large' />
            </div>
            <div className='text'>Login</div>
          </div>

          <div className='row m-2'>
            <Box className='text-user'>Email:</Box>
            <Box className='form-input'>
              <PersonPinIcon className='iconic'></PersonPinIcon>

              <TextField
                className='p-2 user-info'
                id='email'
                type='text'
                value={email}
                placeholder='Email'
                variant='outlined'
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </Box>
            <Box className='text-user'>Password:</Box>
            <Box className='form-input'>
              <LockOpenIcon className='iconic'></LockOpenIcon>
              <TextField
                className='p-2 user-info'
                id='password'
                type='password'
                value={password}
                placeholder='Password'
                variant='outlined'
                onChange={e => setPassword(e.target.value)}
                fullWidth
              />
            </Box>
            <FormControlLabel
              control={
                <CheckBox
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                  name='checkedI'
                />
              }
              label='Remember me'
            />
            <Button
              variant='contained'
              color='primary'
              endIcon={<SendIcon />}         
              onClick={handleClickOnButton}
              fullWidth
            >
              Login
            </Button>
          </div>
          <Divider variant='middle' />
           <span value={{error}}></span>
        </div>
      </Container>
    </div>
  )
}

export default Login
