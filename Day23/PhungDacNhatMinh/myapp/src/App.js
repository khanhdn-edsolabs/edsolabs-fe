import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodayWeather from "./Components/TodayWeather";
import "./Scss/app.scss";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg">
      <Header title="Edsolabs 5-Day Forecast" />
      <TodayWeather />
      <Footer />
    </Container>
  );
}

export default App;
