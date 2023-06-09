import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
const server = create();
const router = _router('db.json');
const middlewares = defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

//! Json Server Portion
// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 5000; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);
// server.listen(port);

//! Json Server Portion