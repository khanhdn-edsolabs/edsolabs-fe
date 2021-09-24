import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { StudentDataList } from './StudentDataList';
import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    textAlign:'center'
  }
}))
export const StudentList = (props) => {
  const classes = useStyles();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [name , setName] = useState('');
  const [submitName, setSubmitName] = useState('')
  const [submitAge, setSubmitAge] = useState()
  const [submitGender, setSubmitGender] = useState()
  const [len, setLen] = useState();
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const getLen = a => {
    setLen()
  }
  const [visible, setVisible] = useState(5);
  const loadMore  = ()=> {
    setVisible(value => value + 6)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    if(!name || name === '') {
      return
    }
    setSubmitName(name)
    setSubmitAge(age)
    setSubmitGender(gender)
    console.log(gender)
    console.log(name)
    console.log(age)
    setName('')
    setGender(null);
    setAge('');
  }
  const handleRefresh = e => {
    e.preventDefault()
    setSubmitName('')
    setSubmitAge('')
    setSubmitGender(null)
  }
  console.log(len)
  return (
    <Grid container justifyContent="center" spacing={8}>
      <Grid item xs={12} className={classes.submit}>
        <form>
          <Grid container justifyContent="center" spacing={5} alignItems="center">
            <Grid item xs={3}>
              <TextField 
                id="outlined-basic" 
                label="Search by name..." 
                variant="outlined" 
                value={name}
                required
                onChange = {e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={gender}
                    onChange={handleChange}
                    label="Gender">
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField 
                id="outlined-basic" 
                label="Age" 
                variant="outlined"
                required
                value = {age}
                onChange = {e => setAge(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={handleSearch}>
                <SearchIcon/>
              </IconButton>
              <IconButton onClick={handleRefresh}>
                <RefreshIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <StudentDataList 
          NumRow={visible}
          name={submitName}
          gender={submitGender}
          age={submitAge}
          getDataLen={getLen}
          />
      </Grid>
      <Grid item xs={6} className={classes.submit}>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={loadMore}>Load more student</Button>
      </Grid>
    </Grid>
  )
}