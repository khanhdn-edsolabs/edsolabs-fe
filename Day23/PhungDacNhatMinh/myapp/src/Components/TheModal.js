import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import img from "../img/avatar.jpg";

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
    padding: theme.spacing(2, 4, 3),
  },
}));
function TheModal(props) {
  const { showModalProps, setShowModalProps } = props;
  const classes = useStyles();

  const handleClose = () => {
    setShowModalProps(false);
  };

  return (
    <>
      {showModalProps ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModalProps}
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showModalProps}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Một vài thông tin về ban thân</h2>
              <Box>
                <div>
                  <img src={img} alt="" className="img" />
                </div>
                <div>
                  <p id="transition-modal-description">
                    Tên : Phùng Đắc Nhật Minh
                  </p>
                  <p id="transition-modal-description">
                    Ngày Sinh : 20/09/1998
                  </p>
                  <p id="transition-modal-description">
                    Địa Chỉ : Sơn Tây , Hà Nội
                  </p>
                  <p id="transition-modal-description">
                    Sở thích : code , thể dục thể thao , xem phim
                  </p>
                </div>
              </Box>
              <Button onClick={handleClose} variant="outlined" className="btn">
                Close
              </Button>
            </div>
          </Fade>
        </Modal>
      ) : null}
    </>
  );
}

export default TheModal;
