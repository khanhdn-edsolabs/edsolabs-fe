import React from "react";
import "./App.css";
import MainWeatherWindow from "./components/MainWeatherWindow";
import CityInput from "./components/CityInput";
import WeatherBox from "./components/WeatherBox";
import CallModal from "./components/CallModal";


class App extends React.Component {
  state = {
    city: undefined,
    // Ngày chứa các đối tượng có thuộc tính date, weather_desc,icon,temp
    days: new Array(3),
  };

  // Tạo các đối tượng ngày và cập nhật trạng thái
  updateState = (data) => {
    const city = data.city.name;
    const days = [];
    const dayIndices = this.getDayIndices(data);

    for (let i = 0; i < 4; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp,
      });
    }

    this.setState({
      city: city,
      days: days,
    });
  };

  // Thực hiện call API vơi tên thành phố đã cho
  makeApiCall = async (city) => {
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
    ).then((resp) => resp.json());

    if (api_data.cod === "200") {
      await this.updateState(api_data);
      return true;
    } else return false;
  };

  // Trả về mảng có chỉ số của 3 ngày tiếp theo trong danh sách
  // từ dữ liệu API
  getDayIndices = (data) => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  render() {
    const WeatherBoxes = () => {
      const weatherBoxes = this.state.days.slice(1).map((day) => (
        <li>
          <WeatherBox {...day} />{" "}
        </li>
      ));

      return <ul className="weather-box-list"> {weatherBoxes} </ul>;
    };
    return (
      <div className="App">
        <header className="App-header">
          <MainWeatherWindow data={this.state.days[0]} city={this.state.city}>
            <CityInput
              city={this.state.city}
              makeApiCall={this.makeApiCall.bind(this)}
            />{" "}
            <WeatherBoxes />
          </MainWeatherWindow>{" "}
        </header>{" "}
        <CallModal/>
      </div>
    );
  }
}

export default App;
