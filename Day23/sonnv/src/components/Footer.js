import { Link } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(e);
  };

  return (
    <Wrapper>
      <section>
        <h3>Weather Todays's</h3>
        <h3>
          &copy;{moment().year()} FE class. Made with 🖤 by&#160;
          <Link onClick={handleOpen}>{process.env.REACT_APP_PROFILE}</Link>
          {open && <Profile open={open} onClose={(e) => handleClose(e)} />}
        </h3>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c5a491;
  text-align: center;
  span {
    color: gey;
  }
  h3 {
    color: white;
    margin: 0.1rem;
    font-size: 20px;
    text-transform: none;
    line-height: 1.25;
  }
  .MuiLink-root {
    color: white;
    text-decoration: none;
  }
  .MuiLink-root:hover {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default Footer;
