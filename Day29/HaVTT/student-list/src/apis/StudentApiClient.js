import http from './apiData'
const getAllStudent = () => {
  return http.get("/students");
};
export default {
  getAllStudent,
};
