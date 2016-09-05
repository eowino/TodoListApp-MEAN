'use strict';

var angular = require('angular');

//The $q provider is used to bundle requests to the server
//It's an Angular service used to help manage requests 
angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    var queue = [];

    //Loop through each of the todos and for each todo, push a request to post the data to the server
    todos.forEach(function(todo, index){
    	var request;
    	//if the todo doesn't have an ID i.e. doesn't exist in db yet
    	if(!todo._id){
    		//the request equals post to our api todos route, where the body of the request is the todo itself
    		request = $http.post('/api/todos/', todo);
    	}else {
    		request = $http.put('/api/todos/' + todo._id, todo).then(function(result){
    			return result.data.todo;
    		});
    	};
    	queue.push(request); 
    });
    //Creation of the request array facilitates the usage of the $q service to run all the requests in parallel
    //The all method iterates through the queue runs each request and then returns a promise
    //Resolves all promises before returning the result
    return $q.all(queue).then(function(results){
    	console.log("I saved " + todos.length + " todos!");
    });
  };
  
});
