
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  wrapper: {
    marginTop: theme.spacing(3),
    fontSize: "14px",
    fontWeight: "bold",
  },
  heart: {
      width: "18px",
      marginBottom: "-8px",
  },
  paper: {
    position: "absolute",
    backgroundColor: "#ff7043",
    color: "#fce4ec",
    border: "2px solid #ff7043",
    borderRadius: "16px",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Footer (){
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div className={classes.wrapper}>
        <h3>
            @ 2021 by FE class. Made with <FavoriteIcon className={classes.heart}/> by <span onClick={handleOpen}>HaVTT</span>
        </h3>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="name"
          aria-describedby="address"
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="name">Full name: Vũ Thị Thu Hà</h2>
            <p id="address">Address: Hà Nội</p>
          </div>
        </Modal>
      </div>
    );
}