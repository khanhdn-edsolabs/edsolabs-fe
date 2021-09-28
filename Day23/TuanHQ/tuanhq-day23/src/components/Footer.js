import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Slide,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  media: {
    height: 140,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '50%',
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function Footer() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(process.env);
    setOpen(false);
  };
  return (
    <Box mt={2}>
      <Typography align="center" variant="subtitle1" component="h2">
        &copy; 2021 by FE class. Made with &hearts; by
        <Button onClick={handleClickOpen}>
          {process.env.REACT_APP_YOUR_NAME}
        </Button>
      </Typography>

      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          TransitionComponent={Transition}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            About me
          </DialogTitle>

          <DialogContent dividers>
            <Avatar
              alt="Hà Quốc Tuấn"
              src={`https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/130722558_1002218106914370_4072356303264007484_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=a6uXvR--dxAAX91Tref&_nc_ht=scontent.fhan14-2.fna&oh=bf60ba65b9d4560daa2067479aabde2c&oe=6161F17F`}
              variant="rounded"
              className={classes.large}
            />
            <Typography>
              Fullname: Ha Quoc Tuan <br /> Birthday: 07/11/2000 <br />{' '}
              University: HaUI
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus temporibus voluptate ducimus facere minus expedita.
                Necessitatibus atque odio sint soluta.
              </p>
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}

export default Footer;
