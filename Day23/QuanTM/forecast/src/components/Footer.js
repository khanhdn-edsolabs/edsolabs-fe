import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Portal from "@material-ui/core/Portal";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";

import AuthorModal from "./AuthorModal";

const container = document.querySelector("#modal");

const useStyles = makeStyles({
  root: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  icon: {
    verticalAlign: "middle",
  },
  button: {
    fontWeight: "bold",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  return (
    <Typography className={classes.root} align="center">
      @ 2021 by FE class. Made with{" "}
      <FavoriteIcon fontSize="small" className={classes.icon} /> by
      <Button
        color="primary"
        className={classes.button}
        onClick={() => setModal(true)}
      >
        {process.env.REACT_APP_AUTHOR_NAME}
      </Button>
      <Portal container={container}>
        <AuthorModal modal={modal} setModal={setModal} />
      </Portal>
    </Typography>
  );
}
