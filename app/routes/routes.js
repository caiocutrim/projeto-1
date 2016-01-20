'use strict';
module.exports = (app) => {
  app.get('/', (req,res) => res.render('index',{hello: "hello word!"}));
  app.get('/home', (req,res) => {
     res.render('home',{
         nome: 'Paulo Tiba',
         email: 'paulotiba@hotmail.com',
         desc: 'lorem ipsom dolor sit met ,veom benon.'
     }); 
  }); 
};
