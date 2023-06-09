import path from 'path';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/users', router);
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

server.listen(port, () => {
  console.log('JSON Server is running on ' + port);
});
