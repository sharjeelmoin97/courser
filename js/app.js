var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
	{title: 'post 1', upvotes:0},
	{title: 'post 2', upvotes:0},
	{title: 'post 3', upvotes:0},
	{title: 'post 4', upvotes:0},
	{title: 'post 5', upvotes:0},
  ];

  $scope.addPost = function(){
  	$scope.posts.push({title: 'A new post!', upvotes: 10});
  }
  /*new field post*/
  $scope.addPost = function () {
  	$scope.posts.push({title: $scope.title,
  		link : $scope.link, 
  		upvotes: 05
  	});

  	$scope.title = "";
  	$scope.link = "";
  }

  $scope.incrementUpvotes = function(post) {
  	post.upvotes += 1;
  };
  $scope.decrementUpvotes = function(post) {
  	post.upvotes -= 1;
  };

}]);