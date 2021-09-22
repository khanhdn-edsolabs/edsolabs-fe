import axios from 'axios';

export const getApiUser = async () => {
  return await axios.get(`${process.env.REACT_APP_API_USER}`);
};
