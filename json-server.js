import { create, router as _router, defaults } from 'json-server';

const server = create();
const router = _router('db.json');
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/users', router); // Use '/users' as the base URL for the router
server.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JSON server' });
});

server.listen(port, () => {
  console.log('JSON Server is running on ' + port);
});
