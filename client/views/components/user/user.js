var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

angular.module('savor.user',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore', 'wu.masonry'])

.controller('userCtrl', function($scope, $http, _, Meals) {
  angular.extend($scope, Meals);

  $scope.profile = JSON.parse(localStorage.getItem('profile'));
  
  // getAll function that will query the user db
  // return all the meals
  
  // getAllFrhoiends function that will query the db for 
  
  function getAll(id) {
    // check this out
    var id = id || $scope.userOnRootScope.userID;
    $http.get('/api/users/' + id).then(function(res) {
      console.log(res);
    })
  }
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

