import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  paper: {
    backgroundColor: "#f8f5f2",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Profile = (props) => {
  const classes = useStyles();
  const handleClose = () => {
    props.onClose(false);
    // setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">My profile</h2>
            <img
              src="https://bompets.com/wp-content/uploads/2019/11/cat-anh-long-ngan-1.jpg"
              alt="Profile"
            />
            <h3>Hi mọi người, mình tên là Sơn.</h3>
            <h3>
              Các bạn có thể ghé thăm facebook của mình :{" "}
              <Link href="https://www.facebook.com/sonhelluu/" color="inherit">
                {" "}
                {process.env.REACT_APP_PROFILE}
              </Link>
            </h3>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Profile;
