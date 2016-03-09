'use strict';
module.exports = UserModel;

const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

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
  schema.plugin(passportLocalMongoose);

  return mongoose.model('User', schema);
}
