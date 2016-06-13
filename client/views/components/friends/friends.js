angular.module('savor.friends',[
  'ngMaterial',
  'ngMessages',
  'material.svgAssetsCache',
  'ngDialog',
  'savor.user'])
.controller('friendsController', function($scope, $http, ngDialog, Upload, $window, Reviews, Meals) {
  
  var testList = [];
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
        testList.push(currentUser.username);
      });
      console.log('test here ', testList);
    });
  };
  getAllUsers();
  // console.log('this is the test ', test);
  // $scope.userList = getAllUsers();
$scope.userList = testList;

// ****** DO THIS
// addFriendToUser = function
  
  // *************** Check to ensure all the appropriate fields are here *****************
  $scope.newReview = function(){
    
    var legibleDate = $scope.meal.date.toDateString();
    var data = ({
      userID: $scope.userOnRootScope.user_id,
      meal: $scope.meal.meal,
      restaurant: $scope.meal.restaurant,
      notes: $scope.meal.notes,
      date: legibleDate,
      image: $scope.myCroppedImageUrl
    });
    $scope.addReview($scope.meals, data);
    $scope.sendPost(data);
    ngDialog.close();
  };
  
  $scope.sendPost = function (data) {
    $http({
      method: "POST",
      data: data,
      url: '/api/users/meals/'
    });
  };

    // gets triggered when a file has been selected from the file input
    var handleFileSelect = function(evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        console.log('in file reader');
        $scope.$apply(function($scope){
          $scope.myImage = evt.target.result;
        });
      };

      reader.readAsDataURL(file);
    };

});
