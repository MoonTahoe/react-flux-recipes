var express = require('express');
var bodyParser = require('body-parser');
var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static('./dist'));
module.exports = server;