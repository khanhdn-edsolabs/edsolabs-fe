import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { StudentList } from './StudentList';
import { StudentTeam } from './StudentTeam';
import getData from '../../api/getData';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'rgba(0,0,0,0.1)',
    borderBottom: 'solid 1px linear-gradient(to right, #000 0%, #EEC965 50%, #000 100%);'
  },
  container: {
    marginTop: '50px',
  },
  text: {
    color: '#fffff'
  },
  btn: {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    background: '#44d2b6'
  }
}));

export const HomePage = ({props}) => {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    getApi();
  }, [])
  const getApi = () => {
    getData.getAll()
      .then(response => {
        setData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className={classes.appBar}>
          <Container maxWidth="md">
            <Grid container justifyContent="flex-end">
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <h3>Welcome, Mr Admin</h3>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>LogOut</MenuItem>
              </Menu>
            </Grid>
          </Container>
          <Grid container justifyContent="center">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab className={classes.btn} label="Student List" value="1" />
            <Tab className={classes.btn} label="Teams" value="2" />
          </TabList>
          </Grid>
        </AppBar>
        <Container maxWidth="md" className={classes.container}>
          <TabPanel value="1">
            <StudentList/>
          </TabPanel>
          <TabPanel value="2">
            <StudentTeam data={data}/>
          </TabPanel>
        </Container>
      </TabContext>
    </div>
  );
}