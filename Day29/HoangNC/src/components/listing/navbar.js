import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./style";
import { Button } from "@mui/material";

const onLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};
const onReset = () => {
  window.location.reload();
};

export default function Navbar() {
  const name = JSON.parse(localStorage.name);
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            onClick={onReset}
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
          >
            Welcom, {name}
          </Typography>
          <Button
            color="secondary"
            className={classes.logout}
            variant="contained"
            onClick={onLogout}
          >
            {" "}
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
