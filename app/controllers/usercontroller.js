'use strict';

module.exports = UserController;


function UserController(app){
    let control = {};
    control.getPageDefault = (req, res) => {
        res.render('pages/home');
    };
    control.loginUser = (req, res) => {
        res.render('pages/login');
    }
    control.getPanelCreateUser = (req, res) => {
        res.render('pages/createuser');
    }
    return control;
}
