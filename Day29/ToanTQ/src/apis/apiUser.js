import axios from "axios";
import axiosClient from "./axiosClient";

export const getApiUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axiosClient.get("/students", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const postApiUser = (username, password) => {
  return axiosClient.post("/login/users", {
    email: username,
    password: password,
  });
};
