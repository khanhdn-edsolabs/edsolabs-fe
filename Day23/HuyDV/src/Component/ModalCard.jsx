import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import imgFace from '../img/img-face.jpg';

import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



const ImgCard = styled.img`
   width:200px;
   float: left;
    margin: 0px 10px 10px 0px;
  `;

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        maxWidth: '600px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    Header: {
        width: 'calc(100% + 64px)',
        padding: theme.spacing(.5, 4, .5),
        fontSize: '25px',
        border: '1px solid #000',
        borderTop: 'none',
        margin: theme.spacing(-2, -4, 2, -4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}));

const ModalCard = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.Header}>Abou Me
                <IconButton onClick={props.handleClose} className={classes.iconButton} aria-label="menu">
                    <CloseIcon />
                </IconButton>
            </div>
            <div id="simple-modal-description">
                <ImgCard src={imgFace} />
                <div className={classes}>
                    <h3>Xin chào: Tôi là Huy</h3>
                    <p>Tôi hiện tại đang sinh sống và làm việc ở hà nội.</p>
                    <p>Tôi có sở thích đọc sách và chơi game <br />( hiện đang tham gia giải đấu Edsolab liên minh )!</p>
                </div>
            </div>
            <ModalCard />
        </div>
    );

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalCard
