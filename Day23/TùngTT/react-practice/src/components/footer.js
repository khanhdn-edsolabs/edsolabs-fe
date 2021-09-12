import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import avatar from '../img/IMG_8835.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
    },
    onTop: {
        marginTop: '30px',
    },
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    descriptionMod: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
    },
    avatar_size: {
        width: '50%',
        height: '50%',
    },
}));
export const Footer = (getEle) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.onTop}>
            <Typography className={classes.root} gutterBottom>
                <CopyrightIcon/>
                <span>2021 by FE class. Made with </span>
                <FavoriteIcon/>
                <span> by </span>  
                <Link href="#" type="button" onClick={handleOpen}>{getEle.name}</Link>
            </Typography>
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"About me"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <Typography className={classes.descriptionMod}>
                    <img className={classes.avatar_size} src={avatar} alt="avatar about me"/>
                    <ul>
                        <li>
                            Họ và tên: {getEle.name}
                        </li>
                        <li>
                            Ngày sinh: {getEle.date}
                        </li>
                        <li>
                            Trường: {getEle.school}
                        </li>
                        <li>
                            Quê quán: {getEle.home}
                        </li>
                        <li>
                            Vị trí: {getEle.pos}
                        </li>
                    </ul>
                </Typography>
                <span>
                    Hi anh em!
                </span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Close
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}

export const LoadError = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Lỗi!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <Typography>
                    <h3>Không tìm thấy dữ liệu, thử lại!</h3>
                </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
