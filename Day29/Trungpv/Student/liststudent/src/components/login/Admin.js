import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import  {StudentList} from '../layout/StudentList';
import StudentTeam  from '../layout/StudentTeam';
import Header from '../layout/header';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'rgba(158,158,158,1)',
    borderBottom: 'solid 1px linear-gradient(to right, #000 0%, #EEC965 50%, #000 100%);',
  },
  container: {
    marginTop: '50px',
    width:'100%'
  }
}));

export const Admin = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
  
    <div className={classes.root}>
      <TabContext value={value}>
      <Header />
      <AppBar position="static" className={classes.appBar}>
          <Container maxWidth="m-3">
         
          </Container>
          <Grid container justifyContent="center">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Student List" value="1" />
            <Tab label="Teams" value="2" />
          </TabList>
          </Grid>
        </AppBar>
        <Container maxWidth="md" className={classes.container}>
          <TabPanel value="1">
            <StudentList/>
          </TabPanel>
          <TabPanel value="2">
            <StudentTeam/>
          </TabPanel>
        </Container>
      </TabContext>
    </div>
    </>
  );
} 