import React, { useState} from 'react';
import {Grid,TextField,InputLabel,MenuItem,FormControl,Select,IconButton,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { StudentDataList } from './studentDataList';

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
  search: {
    display: "flex",
    justifyContent: "right",
    flexWrap: "wrap",
  },
  searchName: {
    marginRight: "10px",
  },
  searchGender: {
    marginRight: "10px",
  },
  searchAge: {
    marginRight: "10px",
    width: "80px",
  },
  btn: {
    backgroundColor: '#C0C0C0',
    borderRadius: '16px',
    border: '2px solid #333333'
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

  const handleChange = (event) => {
    setGender(event.target.value);
  };

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
    setGender('');
    setAge('');
  }
  const handleRefresh = (e) => {
    e.preventDefault()
    setSubmitName('')
    setSubmitAge()
    setSubmitGender()
  }
  return (
    <Grid container justifyContent="center" spacing={8}>
      <Grid className={classes.search} container spacing={5} alignItems="center">
        <Grid className={classes.searchName}>
          <TextField 
            id="outlined-basic" 
            label="Search by name..." 
            variant="outlined" 
            alue={name}
            required
            onChange = {e => setName(e.target.value)}
            />
        </Grid>
        <Grid className={classes.searchGender}>
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
        <Grid className={classes.searchAge}>
          <TextField 
            id="outlined-basic" 
            label="Age" 
            variant="outlined"
            required
            value = {age}
            onChange = {e => setAge(e.target.value)} 
          />
        </Grid>
        <Grid>
          <IconButton onClick={handleSearch}>
            <SearchIcon/>
          </IconButton>
          <IconButton onClick={handleRefresh}>
            <RefreshIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StudentDataList 
          NumRow={visible}
          name={submitName}
          gender={submitGender}
          age={submitAge}
          />
      </Grid>
      <Button className={classes.btn} onClick={loadMore}>Load more student</Button>
    </Grid>
  )
}