var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

angular.module('savor.user',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore', 'wu.masonry'])

.controller('userCtrl', function($scope, $http, _, Meals) {
  angular.extend($scope, Meals);

  // $scope.profile = JSON.parse(localStorage.getItem('profile'));
  // function getAll() {
  //   var user = JSON.parse(window.localStorage.profile).email;
  //   $http.get('/api/restaurants').then(function(res) {
  //     $scope.restaurants = _.filter(res.data,function(restaurant) {
  //       if(restaurant.userEmail === user) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   });
  // }
  // getAll();
})

.factory('Meals', function() {
  // var meals = [];

  //Test Data
  var meals = [{
    meal: "Steak Tartar",
    restaurant: "Mom's Fancy Diner",
    date: "today"
  }, {
    meal: "Fried Possum",
    restaurant: "Bayou Bill's BBQ",
    date: "yesterday"
  }, {
    meal: "Big Mac",
    restaurant: "the good McDonalds, yknow, by the freeway",
    date: "tomorrow"
  }, {
    meal: "Soylent Green",
    restaurant: "Probably People",
    date: "the near future"
  }, {
    meal: "Peanut Butter, straight from the jar",
    restaurant: "your empty pantry",
    date: "whatevs"
  }, {
    meal: "Steak Tartar",
    restaurant: "Mom's Fancy Diner",
    date: "today"
  }, {
    meal: "Fried Possum",
    restaurant: "Bayou Bill's BBQ",
    date: "yesterday"
  }, {
    meal: "Big Mac",
    restaurant: "the good McDonalds, yknow, by the freeway",
    date: "tomorrow"
  }, {
    meal: "Soylent Green",
    restaurant: "Probably People",
    date: "the near future"
  }, {
    meal: "Peanut Butter, straight from the jar",
    restaurant: "your empty pantry",
    date: "whatevs"
  },

  ];
  return {
    meals: meals
  };
})

