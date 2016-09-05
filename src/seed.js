//This file will initialise the db with data for testing purposes

'use strict';

var Todo = require('./models/todo.js');

var todos = [
	'Clean the dishes',
	'Read the book',
	'Make some lunch',
	'Wash the car'
];

//for each todo in the array, find a todo where the name equals the todos
//as you do that, you will either get an error or todos
//if no error and the todos doesn't exist then create it 
todos.forEach(function(todo, index){
	Todo.find({'name': todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({name: todo, completed: false});
		}
	});
});