import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

export const getCountries = (countries) =>
  axios.get(
    `${URL}forecast.json?key=${KEY}&q=${countries}&days=3&aqi=yes&alerts=yes`
  );
