import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import CardMedia from '@material-ui/core/CardMedia'
import './footer.scss'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

// const APP_NAME = "Nguyễn Trung Đức"
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function Footer () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Grid item container justifyContent='center' alignItems='center'>
        <p>
          &copy; 2021 by FE class. Made with &hearts; by
          <Button onClick={handleClickOpen}>
            <span>{process.env.REACT_APP_API_NAME}</span>
          </Button>
        </p>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title' onClose={handleClose}>
          Giới thiệu về bản thân
        </DialogTitle>
        <DialogContent dividers className='dialogContent'>
          <CardMedia
            component='img'
            alt='Nguyễn Trung Đức'
            title='Nguyễn Trung Đức'
            image='../../../aboutme.jpg'
            className='dialogImage'
          />
          <div>
            <Typography gutterBottom>
              <div>
                Họ tên: Nguyễn Trung Đức
                <br />
                Ngày sinh: 27/07/1998
                <br />
                Quê quán: Hưng Yên
                <br />
                Trường: Đại học Kinh tế Kỹ thuật Công nghiệp Hà Nội
              </div>
            </Typography>
            <Typography gutterBottom>
              Sở thích : Code , Ca hát , Chơi càu lông , Bóng đá
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
