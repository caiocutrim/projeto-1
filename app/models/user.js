'use strict';
module.exports = UserModel;

const mongoose = require('mongoose');


function usermodel(){

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

    return mongoose.model('User', schema);
}
