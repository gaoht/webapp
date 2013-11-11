var express = require('express');
var https = require('https');
var http = require('http');
var config = require('./config.js');
var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.logger());
app.use(app.router);
config.addRoutes(app);
app.use(function(req, res, next){
    res.send(404, 'Sorry cant find that!');
});

var server = http.createServer(app);
server.listen(config.listenPort, '0.0.0.0', 511, function() {
    // // Once the server is listening we automatically open up a browser
    var open = require('open');
    open('http://localhost:' + config.listenPort + '/');
});
console.log('GRC Server - listening on port: ' + config.listenPort);