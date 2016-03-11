/**
<<<<<<< HEAD
configurations of the middleware
**/
"use strict";
module.exports = Setup;
=======
  configurations of the middleware
 **/
'use strict';
module.exports =Setup;
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
const express = require('express');
const passport = require('passport');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const load = require('express-load');
const engine = require('ejs-mate');
let app;


<<<<<<< HEAD
function Setup() {
  app = express();
  app.engine('ejs', engine);
=======
function Setup(){
  app = express();
  app.engine('ejs',engine);
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
  app.set("views", "./app/views"); //especifica o modulo onde serão criadas  as views
  app.set("view engine", "ejs"); // especifica o motor de viwes
  app.set('port', 3000);

  //usando middlewares incluidos no express
  app.use(require('express-session')({
<<<<<<< HEAD
    secret: 'my secret',
    resave: false,
    saveUninitilized: false
=======
    secret:'my secret',
    resave:false,
    saveUninitialized:false
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
  }));
  app.use(passport.initialize());
  app.use(express.static('public'));
  app.use(bodyParser.json());
<<<<<<< HEAD
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());

  load('model', {
      cwd: 'app'
    })
=======
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(methodOverride());

  load('model',{cwd:'app'})
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
}
