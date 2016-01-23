'use strict';
module.exports = (app) => {
    //controles
  app.get('/', (reg, res ) => res.render('pages/home'));
};
