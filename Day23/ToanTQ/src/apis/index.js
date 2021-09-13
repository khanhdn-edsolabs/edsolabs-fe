import axios from "axios";
const URL = "http://api.weatherapi.com/v1/";
const key = "1b2b2cebf26a49fbb7373013210909";

export const getCountries = (countries) =>
  axios.get(
    `${URL}forecast.json?key=${key}&q=${countries}&days=3&aqi=yes&alerts=yes`
  );
