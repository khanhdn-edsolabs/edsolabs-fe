import { Container, Grid, IconButton, Menu, MenuItem, Paper } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  let name = JSON.parse(localStorage.getItem("name"));

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  // menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Paper>
      <Grid item >
      <Container>
        <Grid container justifyContent="flex-end" alignItems="center">
          
            <p>Welcome, {name}</p>
            <IconButton onClick={handleClickMenu}>
              <KeyboardArrowDownIcon />
            </IconButton>
          
          
        </Grid>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              marginTop: "5px",
              maxHeight: 50 * 2,
              width: "10ch",
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={logOut}>Logout, Tạm Biệt
          </MenuItem>
        </Menu>
      </Container>
    </Grid>
    </Paper>
    
  );
}