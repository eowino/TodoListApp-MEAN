'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('todoCtrl', function($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    //The finally method gets called whether or not the saveTodos promise is successful
    dataService.saveTodos(filteredTodos).finally($scope.resetTodosState());
  }; 

  $scope.resetTodosState = function() {
    $scope.todos.forEach(function(todo){
      todo.edited = false;
    });
  }
});