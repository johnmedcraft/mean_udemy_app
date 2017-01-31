//REQUIRES
var express = require('express');
var path = require('path');
var routes = require('./api/routes');

//INITIATE
var app = express();

//SET THE PORT
app.set('port', 3000);

//DEFINE MIDDLEWARE
app.use(function(req, res, next) {
  console.log(req.method, req.url);
   next();
});

//DEFINE STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//DEFINE ROUTES FOLDER
app.use('/api', routes);

//START SERVER
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port ' + port + '...');
});