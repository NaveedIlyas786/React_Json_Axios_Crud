import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/users', router);
server.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JSON server' });
});

server.listen(port, () => {
  console.log('JSON Server is running on ' + port);
});
