import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: 40,
    width: 700,
    height: 550,
  },
  changName: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "Glory",
    fontSize: 18,
    fontWeight: 600,
  },
  footer: {
    margin: "40px 0 40px 0",
  },
  image: {
    width: "147%",
    height: 460,
    borderRadius: 40,
    margin: "25px",
  },
  box: {
    display: "flex",
  },
  header__box: {},
  icon: { float: "right", margin: "8px 34px 0 0", cursor: "pointer" },
  header: {
    display: "inline-Block",
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 5,
    margin: "5px 0 5px 20px",
  },
  line: {
    borderBottom: "1px solid #333",
  },
  contentFooter: {
    fontWeight: 600,
    fontSize: 18,
  },
  content: {
    margin: "40px 25px 0 0",
  },
  contentName: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 12,
  },
  content__body: {
    fontSize: 20,
    lineHeight: "30px",
    "&>i": {
      fontWeight: 600,
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.footer}>
        <p className={classes.contentFooter}>
          © 2021 by FE class. Made with 🖤 by{" "}
          <button onClick={handleOpen} className={classes.changName}>
            {process.env.REACT_APP_NAME}
          </button>
        </p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header__box}>
              <div className={classes.header}>About Me</div>
              <div className={classes.icon} onClick={handleClose}>
                <svg
                  closeAfterTransition
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
            <div className={classes.line}></div>
            <div className={classes.box}>
              <img className={classes.image} src="image/anhToi.jpg" alt="ho" />
              <div className={classes.content}>
                <p
                  id="transition-modal-description"
                  className={classes.contentName}
                >
                  Hi guys !
                </p>
                <p className={classes.content__body}>
                  I'm Dung, welcome to my weather forecast App, I just learned
                  so I can only do it here hihi, a little bit of introduction
                  about myself:
                </p>
                <p className={classes.content__body}>
                  - Hobbies: football, coffee, write code, listen to music.
                </p>
                <p className={classes.content__body}>
                  - Home town: LaoCai City.
                </p>
                <p className={classes.content__body}>
                  - Date of Birth: 12/05/199*.
                </p>

                <p className={classes.content__body}>
                  <i>Thank you for watching ! I wish you a good day ! 🖤</i>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
