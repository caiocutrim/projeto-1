var http = require('http');
var express = require('./config/express');
var app = express();
var server;



server = http.createServer(app);

server.listen(app.get('port'),function(){
    console.log("hello , i'm here on port http://localhost:3000");
});