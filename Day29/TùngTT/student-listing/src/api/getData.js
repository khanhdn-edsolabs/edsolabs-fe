import http from './useData'
const getAll = () => {
  return http.get("/students");
};
export default {
  getAll,
};