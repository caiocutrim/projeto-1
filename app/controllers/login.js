'use strict';
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const User = require('../models/user')();

module.exports = Login;

function Login() {
  let controller = {};

  controller.loginSetup = () => {
    // setup de controller
    passport.use(new LocalStrategy(User.authenticate()));
    // para salvar a sessão do usuário
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  }

  controller.login = (req, res) => {

  }
  return controller;
}
