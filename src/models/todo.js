//Creating a schema to control and define objects for the db

'use strict';
//mongoose is a singleton which means the module persits throughout the entire application
//This means the 'Todo' model below is registered with Mongoose wherever Mongoose is required 
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;