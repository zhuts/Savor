var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

angular.module('savor.user',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore', 'wu.masonry'])

.controller('userCtrl', function($scope, $http, _, Meals) {
  angular.extend($scope, Meals);

  $scope.profile = JSON.parse(localStorage.getItem('profile'));
  
  var friends;
  function getAll(id) {
    id = id || $scope.userOnRootScope.user_id;
    $http.get('/api/users/' + id).then(function(res) {
      $scope.meals = res.data.meals;
      friends = res.data.friends;
    });
  }
  getAll();
  
  // *********** TODO **************
  // Create a getAllFriends function that will query the db for all of a users friends 
  // Utilize the friends variable
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

