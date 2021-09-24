import React, { useState } from "react";
import { Paper, Menu, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useGlobalContext } from "components/GlobalContext";
import history from "historyObj";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: `${theme.spacing(3)} ${theme.spacing(7)}`,
  },
}));

export default function HomeHeader() {
  const { user, setUser } = useGlobalContext();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogOut = () => {
    setAnchorEl(null);
    setUser(null);
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <Paper className={classes.paper}>
      <Button
        variant="text"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Welcome, {user.user.fullname}
      </Button>
      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleLogOut} disableRipple>
          Log out
        </MenuItem>
      </Menu>
    </Paper>
  );
}
