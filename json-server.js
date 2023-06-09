import jsonServer from 'json-server';
import db from './db.json';

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/users', router);
server.get('/', (req, res) => {
  res.json(db);
});

server.listen(port, () => {
  console.log('JSON Server is running on ' + port);
});
