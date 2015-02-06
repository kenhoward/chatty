'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) { // remember to add the $http
  	this.getMessages = function() {
  		return $http({
  			method: 'GET',
  			url: 'http://localhost:11000'
  		})
  	}  		
  	this.sendMessages = function(msg) {
  		var data = {"message": msg}
  		return $http({
  			method: 'POST',
  			url: 'http://localhost:11000',
  			data: data
  		})
  	} 
    
  });
