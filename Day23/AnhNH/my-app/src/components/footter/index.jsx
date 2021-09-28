import React from 'react';
import Aboutme from '../about';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span: {
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
        fontWeight: "bold"
    }
}));

function Footter() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Grid item lg={12} align="center">
                <Typography variant="body1">
                    © 2021 by FE class. Made with love by <span onClick={()=>handleOpen()} className={classes.span}> #NguyenAnh</span>
                </Typography>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                <Aboutme onCloses={handleClose}></Aboutme>
                </Fade>
            </Modal>
        </>
    )
}
export default Footter;
