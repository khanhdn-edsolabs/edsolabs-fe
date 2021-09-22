import axios from 'axios';

export const getApiTag = async () => {
  return await axios.get(`${process.env.REACT_APP_API_TAGS}`);
};
