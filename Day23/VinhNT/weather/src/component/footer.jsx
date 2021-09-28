/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Link,
  Modal,
  Grid,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Button,
} from '@material-ui/core';
import image from '../assest/IMG_20210911_122839.jpg';
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    color: '#323934',
  },
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  papercontent:{
    alignItems: 'center',
  },
  avatar: {
    maxWidth: theme.spacing(25),
    height: theme.spacing(25),
    width : '100%'
  },
  fact:{
    padding: theme.spacing(1)
  }
}));
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Footer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container className={classes.papercontent} spacing={2}>
        <Grid item xs={6}>
          <Avatar
            alt="VinhNT"
            src={image}
            variant="square"
            className={classes.avatar}
            sizes="100px"
          />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader>Something about me</CardHeader>
            <CardContent>
              <ul className={classes.fact}>
                <li>Full name: Nguyễn Trọng Vĩnh</li>
                <li>DoB: 22/12/2000</li>
                <li>Hobby: chơi game, đi ún cafe</li>
                <li>Funfact: vẫn đang lụy nyc :v</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button variant='text' fullWidth color='secondary' onClick={handleClose}>Close</Button>
    </div>
  );
  return (
    <>
      <Typography className={classes.footer} variant="h6" align="center">
        © 2021 by FE class. Made with love by{' '}
        <Link color="inherit" underline="none" href="#" onClick={handleOpen}>
          {props.author}
        </Link>
      </Typography>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
  );
}
