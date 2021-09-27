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
import  StudentData from './StudentData';

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
  },

}))
export const StudentList = (props) => {
  const classes = useStyles();
 
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
                required
                />
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
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
              />
            </Grid>
            <Grid item xs={3} className="search">
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <StudentData/>
      </Grid>
      <Grid item xs={6} className={classes.submit}>
       
      </Grid>
    </Grid>
  )
} 