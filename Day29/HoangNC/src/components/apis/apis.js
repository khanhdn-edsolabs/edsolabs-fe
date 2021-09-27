import axios from "axios";

export const getUser = async () => {
  return await axios.get(`${process.env.REACT_APP_API_USER}`);
};
export const getStudents = async (name, gender) => {
  return await axios.get(
    `${process.env.REACT_APP_API_STUDENTS}?full_name_like=${name}&gender_like=${gender}`
  );
};
