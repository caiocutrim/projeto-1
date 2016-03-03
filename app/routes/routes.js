'use strict';
module.exports = Route;

function Route(app){
    //function(request, response)
    //route-controllers
    let control = app.controllers.usercontroller;
    app.get('/', control.getPageDefault);
    app.get('/login', control.loginUser);
    app.get('/create-user', control.getPanelCreateUser);
};
