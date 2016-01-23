/**
configurations of the middleware
**/
"use strict";
module.exports =Setup;
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var load = require('express-load');
var engine = require('ejs-mate');
var app;


function Setup(){
    app = express();
    app.engine('ejs',engine);
    app.set("views", "./app/views"); //especifica o modulo onde serão criadas  as views
    app.set("view engine", "ejs"); // especifica o motor de viwes
    app.set('port', 3000);
    
    //usando middlewares incluidos no express
	
	app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());
    
    load('model',{cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);
    
    return app;
}