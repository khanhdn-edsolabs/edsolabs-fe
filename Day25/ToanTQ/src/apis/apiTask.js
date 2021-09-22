import axios from 'axios';

export const getApiTask = async () => {
  return await axios.get(`${process.env.REACT_APP_API_TASKS}`);
};
