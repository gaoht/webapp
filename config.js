var express = require('express');
var path = require('path');
var config = {
    listenPort: 8080,
    mode: "debug"
}
config.debug = {
    "/": path.resolve(__dirname, "./src"),
    "/vendor": path.resolve(__dirname, "./vendor"),
    "/header.tpl.html": path.resolve(__dirname, "./src/app/")
}

config.addRoutes = function(app) {
    for(var url in config[config.mode]){
        app.use(url, express.static(config[config.mode][url]));
    }
}
module.exports = config;