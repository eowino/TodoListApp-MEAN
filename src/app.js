'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();
var port = 3000;

require('./database');
require('./seed');

//Middleware that tells express to use its static server
//to serve static files from the 'public' folder
//serves the public dir when the root of the site is requested
//first param is the namespace that you'll serve from
app.use('/', express.static('public'));

app.use(parser.json());

app.use('/api', router);

app.listen(port, function(){
	console.log("Front end server listening on port " + port);
});