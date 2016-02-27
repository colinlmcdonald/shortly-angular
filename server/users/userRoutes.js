var userController = require('./userController.js');
var path = require('path');


module.exports = function (app) {
  // app === userRouter injected from middlware.js
  var signInSite = path.resolve('client/app/auth/signin.html');
  console.log(signInSite);
  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
  app.get('/signin', function(request, response){
    res.send('hello');
  });
};
