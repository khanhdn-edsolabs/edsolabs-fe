import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import {
  Typography,
  Modal,
  Grid,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from '@material-ui/core';
import image from '../assets/img/anime.jpg';
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    color: '#323934',
  },
  heart: {
    width: '18px',
    marginBottom: '-8px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.5),
  },
  paper: {
    position: 'absolute',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid',
    borderRadius: '25px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  papercontent:{
    alignItems: 'center',
  },
  avatar: {
    maxWidth: theme.spacing(25),
    height: theme.spacing(40),
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

  return (
    <>
      <Typography className={classes.footer} variant="h6" align="center">
        © 2021 by FE class. Made with <FavoriteIcon className={classes.heart}/> by{' '}
        <span onClick={handleOpen}>
          {/* HaVTT */}
          {process.env.REACT_APP_NAME}
        </span>
      </Typography>
      <Modal open={open} onClose={handleClose}>
      <div style={modalStyle} className={classes.paper}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Grid container className={classes.papercontent} spacing={2}>
          <Grid item xs={6}>
            <Avatar
              alt=""
              src={image}
              variant="square"
              className={classes.avatar}
              sizes="200px"
            />
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <ul>
                  <li>Full name: Vũ Thị Thu Hà</li>
                    <li>Birthday: 20/06/1999</li>
                    <li>Education : HaUI</li>
                    <li>Address: Nam Định</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </div>
      </Modal>
    </>
  );
}