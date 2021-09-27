const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router('db.json')
server.use(middlewares)

server.use(router)
server.listen(8080, () =>
  console.log('API is running on http://localhost:8080/'),
)
