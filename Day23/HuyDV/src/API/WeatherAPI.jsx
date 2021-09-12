import axiosClient from "./axioClient";

const weather = {
    getCurrentWeather(city) {
        const url = `/current.json?key=e9faed869c8c49d3b7845236210909&q=${city}`;
        return axiosClient.get(url);
    },
    getForecastWeather(city) {
        const url = `/forecast.json?key=e9faed869c8c49d3b7845236210909&q=${city}&days=5`;
        return axiosClient.get(url);
    },
    searchWeather(city) {
        const url = `/search.json?key=e9faed869c8c49d3b7845236210909&q=${city}`;
        return axiosClient.get(url);
    }
};

export default weather;