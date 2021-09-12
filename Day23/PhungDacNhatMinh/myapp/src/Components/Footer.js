import React, { useState } from "react";
import PropTypes from "prop-types";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import Link from "@material-ui/core/Link";
import TheModal from "./TheModal";

const Footer = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((e) => !e);
  };
  return (
    <footer className="footer">
      <p>
        © 2021 by FE class. Made with{" "}
        <FavoriteRoundedIcon position="absolute" top={40} /> by{" "}
        <Link href="#" onClick={openModal} color="inherit">
          {user}
        </Link>
      </p>
      <TheModal showModalProps={showModal} setShowModalProps={setShowModal} />
    </footer>
  );
};
Footer.propTypes = {
  user: PropTypes.string.isRequired,
};
Footer.defaultProps = { user: "Nhật Minh" };

export default Footer;
