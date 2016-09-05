//This file will act as the API module

'use strict';

var express = require('express');
var router = express.Router();
var Todo = require('../models/todo'); //capital 'T' as referencing a model
//var todos = require('../../mock/todos.json');

router.get('/todos', function(req, res){
	Todo.find({}, function(err, todos){
		if(err){
			return res.status(500).json({message: err.message});
		}
		res.json({todos: todos});
	});
});

router.post('/todos', function(req, res){
	var todo = req.body; //body of the request will be the body of the todos 
	Todo.create(todo, function(err, todo){
		if(err){
			return res.status(500).json({message: err.message});
		}
		res.json({'todo': todo, message: 'Todo created'});
	});
});

router.put('/todos:id', function(req, res){
	var id = req.params.id;
	var todo = req.body; //body of the request will be the body of the todos 
	
	//if there is a todo and a the todo id from the request does not match one in db
	if(todo && todo._id !== id){
		return res.status(500).json({err: "Id's don't match!"});
	}

	//The options parameter (3rd) tells Mongoose to return the updated data
	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo){
		if(err){
			return res.status(500).json({message: err.message});
		}
		res.json({'todo': myTodo, message: 'Todo not updated!'});
	});
});

module.exports = router;