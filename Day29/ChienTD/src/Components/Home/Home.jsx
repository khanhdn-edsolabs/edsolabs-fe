import React, { useState, useContext, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import { DataContext } from "../../Context/dataContext";
import ListStudent from "./ListStudent/ListStudent";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Teams from "./Teams/Teams";
import "./Home.css";

function Home() {
  // get data in useContext
  const { isLoginHome, setIsLoginHome, valueTab, setValueTab } =
    useContext(DataContext);

  // Ref
  const focusRef = useRef(null);
  const tabRef = useRef(null);

  // useState
  const [tab, setTab] = useState(0);

  // event click menu item
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setIsLoginHome(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, [tab]);

  // event keyDown tab teams
  const handlerTabTeam = () => {
      setTab((x) => x + 1);
      setValueTab(true);
  };

  // Event click tab team
  const handlerClickTabTeam = () => {
    setValueTab(false);
  }

  // Event keyDown tab list
  const handlerTabList = () => {
    setValueTab(false);
  }; 
  
  // Event Click tab lis
  const handlerClickTabList = () => {
    setValueTab(true);
  }
  return (
    <Box width="100%">
      {/* Header */}
      <div
        className="header"
      >
        <Box textAlign="right" lineHeight="60px">
          Welcome, {isLoginHome[0].fullname}
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon style={{ color: "black" }} />
          </Button>
        </Box>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>

      {/* Main */}
      {/* Nav */}
      <Box textAlign="center">
        <Box display="flex" justifyContent="center" >
          <Box component="ul" className="nav" display="flex">
            <Box
              component="li"
              tabIndex="1"
              ref={focusRef}
              onKeyDown={handlerTabList}
              onClick={handlerClickTabList}
            >
              Students List
            </Box>
            <Box
              component="li"
              tabIndex="2"
              ref={tabRef}
              onKeyDown={handlerTabTeam}
              onClick={handlerClickTabTeam}
            >
              Teams
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Content */}
      <Box display="flex" justifyContent="center" mt={5} width='100%'>
        {valueTab ? <ListStudent /> : <Teams />}
      </Box>
    </Box>
  );
}

export default Home;
