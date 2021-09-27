import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Tab, Container} from '@material-ui/core';
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import { StudentList } from './studentList';
import { StudentTeam } from './teams';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '50px',
  },
  btn: {
    marginTop: '20px',
    borderRadius: '16px',
    border: '2px solid #333333'
  }
}));

export const List = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
        <Grid container justifyContent="center">
          <TabList onChange={handleChange} >
            <Tab className={classes.btn} label="Student List" value="1" />
            <Tab className={classes.btn} label="Teams" value="2" />
          </TabList>
        </Grid>
        <Container maxWidth="md" className={classes.container}>
          <TabPanel value="1">
            <StudentList/>
          </TabPanel>
          <TabPanel value="2">
            <StudentTeam/>
          </TabPanel>
        </Container>
    </TabContext>
  );
}
