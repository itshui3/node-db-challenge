const express = require('express');
server = express();

server.use(express.json());
server.use(require('helmet')());
server.use(require('morgan')('common'));

const apiRouter = require('./api/apiRouter');

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.status(200).send(`welcome to node-db api, refer to the /api URI for info about routes`)
})

server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found on server` })
})

module.exports = server;