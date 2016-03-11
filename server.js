
'use strict';
const http = require('http');

const express = require('./config/express');
const app = express();
let server;

server = http.createServer(app);

server.listen(app.get('port'),function() {
  console.log("hello , i'm here on port http://localhost:3000");
});
