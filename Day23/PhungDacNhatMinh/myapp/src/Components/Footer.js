import React from "react";
import PropTypes from "prop-types";
const Footer = ({ user }) => {
  return (
    <footer className="footer">
      <p>© 2021 by FE class. Made with love by {user}</p>
    </footer>
  );
};
Footer.propTypes = {
  user: PropTypes.string.isRequired,
};
Footer.defaultProps = { user: "Nhật Minh" };

export default Footer;
