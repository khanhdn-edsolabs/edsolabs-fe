import "./footer.css";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import AboutMe from '../About-me/AboutMe';

const Footer = (props) => {
    const [showAbout, setShowAbout] = useState(false);
    function showAboutMeHandler() {
      setShowAbout(true);
      props.isShow(showAbout);
    }
    useEffect(() => {
      setShowAbout(true);
    },[]);
  return (
    <Box fontWeight="bold" mb={5}>
      © 2021 by FE class. Made with love by{" "}
      <Box component="a" className="about-me" onClick={showAboutMeHandler}>
        {process.env.REACT_APP_API_PROFILE}
      </Box>
    </Box>
  );
};

export default Footer;
