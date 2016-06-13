angular.module('savor.friends',[
  'ngMaterial',
  'ngMessages',
  'material.svgAssetsCache',
  'ngDialog',
  'savor.user'])
.controller('friendsController', function($scope, $http, ngDialog, Upload, $window, Reviews, Meals) {
  angular.extend($scope, Reviews);
  angular.extend($scope, Meals);

  $scope.myImage='';
  $scope.myCroppedImage='';
  $scope.myCroppedImageUrl = '';
  
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
