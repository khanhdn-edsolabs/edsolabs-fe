import config from "./axios";

export const auth = (info) => {
  return config.post("/login", info);
};

export const getData = (token) => {
  var axios = require("axios");
  var config = {
    method: "get",
    url: "http://localhost:3001/students",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios(config)
};

export const tokenAuth = (id, token) => {
  return config.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
