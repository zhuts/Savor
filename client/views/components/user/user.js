var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

angular.module('savor.user',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore', 'wu.masonry'])

.controller('userCtrl', function($scope, $http, _, Meals) {
  angular.extend($scope, Meals);

  $scope.profile = JSON.parse(localStorage.getItem('profile'));
  function getAll() {
    var user = JSON.parse(window.localStorage.profile).email;
    $http.get('/api/restaurants').then(function(res) {
      $scope.restaurants = _.filter(res.data,function(restaurant) {
        if(restaurant.userEmail === user) {
          return true;
        } else {
          return false;
        }
      });

      $scope.restaurants.forEach(function(meal) {
        var unique = _.reduce($scope.meals, function(acc, meal1) {
          if (meal.meal === meal1.meal) {
            acc = true;
          }
          return acc;
        }, false);
        if (!unique) {
          $scope.meals.push(meal);
        }
      })
    });
  }
  getAll();
})

.factory('Meals', function() {
  var meals = [];

  var addMeal = function(newMeal){
    meals.push(newMeal);
  };

  return {
    meals: meals,
    addMeal: addMeal
  };
});

