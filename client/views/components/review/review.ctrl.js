var app = angular.module('savor.review',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngDialog', 'ngFileUpload'])
  .controller('reviewController', function($scope, $http, ngDialog, Upload, $window) {
    $scope.picName;
    $scope.imageUrl;

    $scope.sendPost = function () {
      //useremail file is parsed into the windowlocal storage
      var data = ({
        restaurantName: $scope.restaurant.name,
        restaurantAddress: $scope.restaurant.address,
        priceRating: $scope.price,
        serviceRating: $scope.service,
        foodRating: $scope.food,
        ambienceRating: $scope.ambience,
        restaurantReview: $scope.restaurant.review,
        userEmail: JSON.parse(window.localStorage.profile).email,
        image: $scope.imageUrl
      });

      var config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      }

      $http({
        method: "POST",
        data: data,
        url: '/api/restaurants'
      })
        
      ngDialog.close();
      $scope.photoUploaded = false;
    };

    $scope.upload = function() {
      if($scope.file) {
        $scope.getSignedRequest($scope.file);
      }
      else {
        alert('No File Selected');
      }
    }

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
    }

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
    }
  })
  .directive('file', function() {
    console.log('file dir')
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
  });
