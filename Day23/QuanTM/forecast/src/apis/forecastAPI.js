import axios from "axios";

export default axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: process.env.REACT_APP_API_KEY,
    aqi: "no",
    alert: "no",
    days: "3",
  },
});
