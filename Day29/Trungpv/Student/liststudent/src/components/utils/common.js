import axios from "axios";

export const getUser = async () => {
  return await axios.get(`${process.env.REACT_APP_API_USER}`);
};

export const getStudent = async () => {
  return await axios.get(`${process.env.REACT_APP_API_STUDENTS}`);
};