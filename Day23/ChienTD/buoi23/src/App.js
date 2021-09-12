import Search from "./search/search";
import Footer from "./footer/footer";
import Today from "./today/today";
import { Box } from "@material-ui/core";
import React, { useState } from "react";
import NextDay from "./next-3-day/next-3-day";
import AboutMe from "./About-me/AboutMe";
import "./App.css";

function App() {
  const [showWeather, setshowWeather] = useState(false);
  const [dataWeather, setDataWeather] = useState("");
  const [isShowAbout, setIsShowAbout] = useState(false);

  const handlerGetRegionalWeather = (props) => {
    setDataWeather(props);
    console.log("<<", props);
    if (props.error) {
      alert("Không tìm thấy thành phố yêu cầu")
    }
    if (props && !props.error) {
      setshowWeather(true);
    } else {
      setshowWeather(false);
    }
  };

  const offModel = () => {
    setIsShowAbout(false)
  }

  const isShowFooter = (data) => {
    console.log("<<data", data);
    setIsShowAbout(data);
  };
  return (
    <Box className="App" textAlign="center" pt={10}>
      {isShowAbout ? <AboutMe handlerOffModel={offModel}/> : ""}
      <Search getRegionalWeather={handlerGetRegionalWeather} />
      {showWeather && <Today weather={dataWeather} />}
      {showWeather && <NextDay weatherForecast={dataWeather} />}
      <Footer isShow={(e) => isShowFooter(e)} />
    </Box>
  );
}

export default App;
