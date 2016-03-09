'use strict'
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/user')();

module.exports = Login;

function Login() {
  let controller = {};
  controller.loginSetup = () => {
    //Setup de controller
    passport.use(new localStrategy(User.authenticate()));
    //para salvar a sessão do usuário
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.serializeUser());

  };

  controller.login = (req, res) => {
    res.redirect('/admin/panel');
  };
  return controller;
}
