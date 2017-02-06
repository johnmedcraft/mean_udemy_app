//REQUIRES
require('./api/data/db.js');
var express = require('express');
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

//INITIATE EXPRESS
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

//DEFINE MIDDLEWARE (ORDER MATTERS - THAT'S WHY THIS ONE IS DOWN HERE INSTEAD OF UP THERE)
app.use(bodyParser.urlencoded({extended: false}));

//DEFINE ROUTES FOLDER
app.use('/api', routes);

//START SERVER
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port ' + port + '...');
});