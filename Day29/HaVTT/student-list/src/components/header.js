import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container , Grid, Button, Select} from '@material-ui/core';
import { getUser } from "../apis/apis";
const useStyles = makeStyles((theme) => ({
  header: {
    height: '60px',
    background: 'rgba(0,0,0,0.1)',
    borderBottom: 'solid 1px linear-gradient(to right, #000 0%, #EEC965 50%, #000 100%);'
  },
  txt: {
    paddingTop: '15px',
  },
  select: {
    backgroundColor: 'none',
  },
  btn: {
    backgroundColor: '#fff',
  }
}));

export const Header = () =>{
  const classes = useStyles();
  let history = useHistory();
  const [data, setData] = useState(() => {
    getUser()
      .then((res) => res.data)
      .then((e) => {
        setData(e);
      })
      .catch(() => {})
      .finally(() => {});
  });
  const handleLogout = () => {
    history.push('/login');
  };
  return (
    <Container maxWidth="md" className={classes.header}>
      {typeof data === "object" ? (
        <Grid container justifyContent="flex-end" className={classes.txt}>
            Welcome, {data[0].fullname}
            <Select className={classes.select}>
                <Button 
                    className={classes.btn} 
                    variant="contained"
                    onClick={handleLogout }>
                    Logout
                </Button>
            </Select>
        </Grid>
      ) : (
        ""
      )}
    </Container >
  );
}
