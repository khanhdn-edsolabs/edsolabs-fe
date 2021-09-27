import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AppBars = () => {
  const history = useHistory();
  function handleLogout() {
    history.push("/login");
  }

  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MuiToolbar-gutters {
    justify-content: flex-end;
  }
`;
export default AppBars;
