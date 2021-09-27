import React from "react";
import { Headernav, Welcomeadm } from "./styled";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsChevronDown } from "react-icons/bs";
import { useHistory } from "react-router";

export const Header = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    if (localStorage.getItem("access_token")) {
      alert("Log out Success");
      localStorage.removeItem("access_token");
      history.push("/");
    }
    return null;
  };
  return (
    <Headernav>
      <Welcomeadm>Welcome, Admin</Welcomeadm>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsChevronDown />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </Headernav>
  );
};
