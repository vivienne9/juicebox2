require('dotenv').config();

//console.log(process.env.JWT_SECRET);

const PORT = 3000;
const express = require('express');
const server = express();

const apiRouter = require('./api');
server.use('/api', apiRouter);

const morgan = require('morgan');
server.use(morgan('dev'));

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
      console.log('The server is up on port', PORT)
});


server.use((req, res, next) => {
      console.log("<____Body Logger START____>");
      console.log(req.body);
      console.log("<_____Body Logger END_____>");

      next();
});

server.use(express.json())