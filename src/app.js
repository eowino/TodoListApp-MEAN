'use strict';

var express = require('express');
var app = express();
var port = 3000;

//Middleware that tells express to use its static server
//to serve static files from the 'public' folder
app.use('/', express.static('public'));

// app.get('/', function(req,res){
// 	res.send("<h1>Welcome</h1>");
// });

app.listen(port, function(){
	console.log("Front end server listening on port " + port);
	console.log("Directory Name: " + __dirname);
});