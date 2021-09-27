/* eslint-disable import/no-anonymous-default-export */
import http from './http'
const Login = ({ email, password }) => {
  return http.post('/login', { email, password })
}
const getStuList = () => {
  return http.get('/students')
}
export default {
  Login,
  getStuList,
}
