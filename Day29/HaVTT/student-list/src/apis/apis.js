import axios from "axios";

export const getStudent = async () => {
  return await axios.get(`${process.env.REACT_APP_API_STUDENT}`);
};
export const getUser = async (email, password) => {
  return await axios.get(`${process.env.REACT_APP_API_USER}`, {
    params: { email, password },
  });
};