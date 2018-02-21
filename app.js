var app = require('./config/express')();
var http = require('http').Server(app);
var port = 3000;

http.listen(port);
