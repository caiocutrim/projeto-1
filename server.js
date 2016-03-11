<<<<<<< HEAD
'use strict'
const http = require('http')
=======

'use strict';
const http = require('http');
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
const express = require('./config/express');
const app = express();
let server;



server = http.createServer(app);

<<<<<<< HEAD
server.listen(app.get('port'), function() {
=======
server.listen(app.get('port'),function(){
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
  console.log("hello , i'm here on port http://localhost:3000");
});
