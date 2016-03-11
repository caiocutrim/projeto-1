'use strict';

module.exports = UserModel;

const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');
<<<<<<< HEAD

function UserModel() {

  let schema = mongoose.Schema({
    username: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },

  });
=======

function UserModel(){

  let schema = mongoose.Schema({
    username: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },

  });

>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
  schema.plugin(passportLocalMongoose);

  return mongoose.model('User', schema);
}


