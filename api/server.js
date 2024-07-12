const express = require('express');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

server.use(express.json());

server.use('/api/fruits', fruitsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
  })

module.exports = server;
