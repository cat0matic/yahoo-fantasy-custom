process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
//  here go the routes (i think)
var express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running on port ' + config.port);