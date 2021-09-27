import { Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { Account, Flex, Logo, MyButton, Container } from "./style";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory } from "react-router";

const Header = ({ user }) => {
  let history = useHistory();
  const clearUser = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };
  return (
    <Container>
      <Flex>
        <Logo>Admin</Logo>
        <Account>
          <span>Wecome,{user.fullname}</span>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <MyButton {...bindTrigger(popupState)}>
                  <KeyboardArrowDownIcon />
                </MyButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      clearUser();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Account>
      </Flex>
    </Container>
  );
};

export default Header;
