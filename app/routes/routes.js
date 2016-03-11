'use strict';
const passport = require('passport');
module.exports = Route;


function Route(app){
<<<<<<< HEAD
    //function(request, response)
    //route-controllers
    let control = app.controllers.usercontroller;
    let loginController = app.controllers.login;

    loginController.loginSetup();

    app.get('/', control.getPageDefault);
    app.get('/login', control.loginUser);
    app.get('/create-user', control.getPanelCreateUser);

    app.post('/create-user '
    ,  passport.authenticate('local'),loginController.login);
=======
  //function(request, response)
  //route-controllers
  let control = app.controllers.usercontroller;
  let loginController =  app.controllers.login;

  loginController.loginSetup();

  app.get('/', control.getPageDefault);
  app.get('/login', control.loginUser);
  app.get('/create-user', control.getPanelCreateUser);

  app.post('/create-user', passport.authenticate('local'), loginController.login);
>>>>>>> 872111e8a6e3525cfa5f27f121947a069f35bfd9
};
