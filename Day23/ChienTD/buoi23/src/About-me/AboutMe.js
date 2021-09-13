import React, { useState } from "react";
import { Box } from "@material-ui/core";
import "./about.css";
import Button from "@material-ui/core/Button";
import avatar from "../chien.jpg";

const AboutMe = (props) => {
  const [isShowAbout, setIsShowAbout] = useState("");
  const offModel = () => {
    setIsShowAbout(false);
    props.handlerOffModel(isShowAbout);
  };

  console.log(props);
  return (
    <Box
      position="absolute"
      width="100%"
      zIndex="4"
      className="wrapper"
      textAlign="center"
      display="flex"
      onClick={offModel}
    >
      <Box
        width="50%"
        height="670px"
        bgcolor="white"
        display="inline-block"
        margin="auto"
        border={5}
      >
        <Box display="flex" width="100%" height="50px" borderBottom={5}>
          <Box
            component="h4"
            textAlign="left"
            lineHeight="10px"
            ml={1}
            width="50%"
          >
            About me
          </Box>
          <Box
            component="h2"
            textAlign="right"
            width="50%"
            mr={2}
            fontWeight="bold"
            lineHeight="10px"
            onClick={offModel}
            className="btn-x"
          >
            X
          </Box>
        </Box>
        <Box p={3}>
          <Box>
            <img src={avatar} alt="this is avatar" width="50%" />
          </Box>
          <Box>
            <Box component="h3">Họ tên: Tạ Đức Chiến</Box>
            <Box component="h3">Quê Quán: Ninh Bình</Box>
            <Box component="h3">Ngày sinh: 25/01/2000</Box>
            <Box component="h3">Sở thích: Nữ</Box>
            <Box component="h3">Trường đại học: Công Nghiệp (HAUI)</Box>
          </Box>
          <Box width='100%' textAlign='right'>
            <Button variant="contained" color="primary" onClick={offModel}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
