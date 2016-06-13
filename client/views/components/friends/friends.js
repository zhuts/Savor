angular.module('savor.friends',[
  'ngMaterial',
  'ngMessages',
  'material.svgAssetsCache',
  'ngDialog',
  'savor.user'])
.controller('friendsController', function($scope, $http, ngDialog, Upload, $window, Reviews, Meals) {
  
  var friendList = [];
  var getAllUsers = function() {
    $http({
      method: "GET",
      url: '/api/users/'
    }).then(function(response) {
      // response.data is an array of all the users
      // each user object we want to pull .username from
      // an array of all of our user data
      var users = response.data;
      users.forEach(function(currentUser) {
        var user = {
          username: currentUser.username,
          userID: currentUser.userID
        };
        friendList.push(user);
      });
    });
  };
  getAllUsers();

$scope.userList = friendList;

  $scope.addFriendToUser = function(friend) {
    var data = {
      userID: $scope.userOnRootScope.user_id,
      friend: friend
    };
    $http({
      method: "POST",
      url: '/api/users/friends/',
      data: data
    });
  };

});
