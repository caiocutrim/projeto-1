/**
configurations of the middleware
**/
"use strict";
module.exports =Setup;
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var load = require('express-load');
var app;


function Setup(){
    app = express();
    app.set("views", "./app/views"); //especifica o modulo onde serão criadas  as views
    app.set("view engine", "ejs"); // especifica o motor de viwes
    
    
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