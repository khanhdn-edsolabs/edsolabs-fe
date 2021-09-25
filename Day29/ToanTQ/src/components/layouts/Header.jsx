import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backGround: {
    position: "relative",
    backgroundColor: "#424242",
    width: "100%",
    height: "80px",
    margin: "0 auto",
  },
  item: {
    float: "right",
    marginTop: "30px",
    color: "#FFFFFF",
  },
  button: {
    position: "absolute",
    right: "0",
    bottom: "-10px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
    localStorage.clear();
  };


  return (
    <>
      <Box className={classes.backGround} component="div">
        <Container maxWidth="lg" className={classes.backGround}>
          <Typography
            className={classes.item}
            component="p"
            variant="p"
            float="right"
          >
            Welcome, {localStorage.getItem("email")}
          </Typography>
          <Button
            className={classes.button}
            type="summit"
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            logout
          </Button>
        </Container>
      </Box>
    </>
  );
}
