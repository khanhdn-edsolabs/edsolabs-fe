import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodayWeather from "./Components/TodayWeather";
import "./Scss/app.scss";

function App() {
  return (
    <div className="container">
      <Header title="Edsolabs 5-Day Forecast" />
      <TodayWeather />
      <Footer />
    </div>
  );
}

export default App;
