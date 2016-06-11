angular.module('savor.review',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngDialog', 'ngFileUpload', 'savor.user'])
.controller('reviewCtrl', function($scope, $http, ngDialog, Upload, $window, Reviews, Meals) {
  angular.extend($scope, Reviews);
  angular.extend($scope, Meals);
  $scope.newReview = function(){
    console.log($scope);
    var data = ({
      meal: $scope.meal.meal,
      restaurant: $scope.meal.restaurant,
      userEmail: JSON.parse(window.localStorage.profile).email,
      notes: $scope.meal.notes,
      date: $scope.meal.date,
      image: $scope.imageUrl
    });
    $scope.addReview($scope.meals,data);
    ngDialog.close();
  };

//TODO: refactor for new data form, execute after/simultaneous to adding to new reviews to meals[] in users.js
  // $scope.sendPost = function () {
  //   //useremail file is parsed into the windowlocal storage
  //   var data = ({
  //     userEmail: JSON.parse(window.localStorage.profile).email,
  //   });
  //   var config = {
  //     headers : {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //     }
  //   };
  //   $http({
  //     method: "POST",
  //     data: data,
  //     url: '/api/restaurants'
  //   });
  //   ngDialog.close();
  //   $scope.photoUploaded = false;
  // };

  $scope.upload = function() {
    if($scope.file) {
      $scope.getSignedRequest($scope.file);
    }
    else {
      alert('No File Selected');
    }
  };

  // should be able to use $http instead of xhr
  $scope.getSignedRequest = function(file){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          var response = JSON.parse(xhr.responseText);
          $scope.uploadFile(file, response.signedRequest, response.url);
        }
        else{
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  };

  $scope.uploadFile = function(file, signedRequest, url){
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          document.getElementById('preview').src = url;
          $scope.imageUrl = url;
        }
        else{
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  };
})

.factory('Reviews', function($http){
  var reviews = [];
  var addReview = function(dest,review){
    dest.push(review);
  };
  var removeReview = function(){
    //use signal from button to identify which to delete
  };
  return{
    reviews: reviews,
    addReview: addReview,
    removeReview: removeReview
  };
})


.directive('file', function() {
  console.log('file dir');
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
})

.directive('review', review);
  function review() {
  return {
    templateUrl: '/views/components/review/review.tpl.html',
    controller: reviewCtrl,
    controllerAs: 'review'
  };
}
