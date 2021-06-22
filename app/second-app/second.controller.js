import myModule from '../app.module.js';

export default myModule.controller('SecondController',['$scope',function($scope){
	console.log("Second Controller created!");
	var self = this;
	self.myModel = "Hello world from the SECOND controller!";
}]);