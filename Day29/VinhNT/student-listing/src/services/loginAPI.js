import http from 'http'
export default async function loginAPI(data) {
  return http.post('/users', data)
}
