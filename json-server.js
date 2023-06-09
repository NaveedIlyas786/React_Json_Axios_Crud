import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
const server = create()
const router = _router('db.json')
const middlewares = defaults()
const port=process.env.PORT||3000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running on '+port)
})
