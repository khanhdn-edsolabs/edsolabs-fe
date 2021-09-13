import axiosClient from "./axiosClient";

const weather = {
  getWeather(city) {
    const url = `/forecast.json?key=4d8f7eaa14b047e6a9554558210909&q=${city}&days=5`;
    return axiosClient.get(url);
  },
  searchWeather(city) {
    const url = `/search.json?key=4d8f7eaa14b047e6a9554558210909&q=${city}`;
    return axiosClient.get(url);
  },
};

export default weather;
