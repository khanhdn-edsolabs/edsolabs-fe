import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';

Header.propTypes = {};

function Header(props) {
  const history = useHistory();
  const handleClickHome = (e) => {
    history.push("/");
  };
  const handleClickList = (e) => {
    history.push("/List");
  };
  const handleClickLogout = (e) => {
    history.push("/Login");
    localStorage.clear();
  };
  return (
    <>
      <main className="header ">
        <header className="header__nav  border-bottom border-dark ">
          <div className="container d-flex justify-content-end">
            <p className="me-1">Webcom, Admin</p>
            <Dropdown>
              <Dropdown.Toggle
                variant="variant"
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleClickLogout()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
        <form className="header__btn d-flex justify-content-center mt-5">
          <Button
            variant="outline-dark"
            className="border-bottom-0 col-2 rounded-0 rounded-top"
            onClick={() => handleClickHome()}
          >
            Students List
          </Button>
          <Button
            variant="outline-dark"
            className="border-bottom-0 col-2 rounded-0 rounded-top"
            onClick={() => handleClickList()}
          >
            Teams
          </Button>
        </form>
      </main>
    </>
  );
}

export default Header;
