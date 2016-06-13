var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

angular.module('savor.user',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore', 'wu.masonry'])

.controller('userCtrl', function($scope, $http, _, Meals) {
  angular.extend($scope, Meals);

  $scope.profile = JSON.parse(localStorage.getItem('profile'));
  
  // Set to false at first so that we only get the current user's friends
  // not friends of friends
  var friends;
  var friendsChecked = false;
  // mealOptions will be an array of arrays
  // mealOptions[0] will be the current user's meals
  // any other things added will be the user's friends' meals
  // $scope.mealOptions = [];
  function getAll(id, friendTag) {
    id = id || $scope.userOnRootScope.user_id;
    $http.get('/api/users/' + id).then(function(res) {
      var mealsList = res.data.meals;
      
      // Adds a tag to our friends' meal options so that we can pull their nickname
      if (friendTag) {
        mealsList.forEach(function(currentMeal) {
          currentMeal.friendTag = friendTag;
        });
      }
      $scope.mealOptions.push(mealsList);
      // $scope.meals = res.data.meals;
      
      if (!friendsChecked) {
        friendsChecked = true;
        checkFriends(res.data.friends);
      }
      
      Meals.updateMeals();
    });
  }
  getAll();
  
  var checkFriends = function(friendArray) {
    friendArray.forEach(function(currentFriend) {
      console.log('inside the friend check ', $scope.mealOptions);
      getAll(currentFriend, currentFriend);
    });
  };
  
  // *********** TODO **************
  // Create a getAllFriends function that will query the db for all of a users friends 
  // Utilize the friends variable
  
  console.log('the full one ', $scope.mealOptions);
  // $scope.mealOptions
  // console.log('the full one ', $scope.mealOptions['0']);
  // console.log('the $scope.meals ', $scope.meals);
  // $scope.meals= mealOptions[0];
  // mealOptions = [[{}, {}, {}], [{}, {}], [{}]]
  // meals = mealOptions[0]
  
})

.factory('Meals', function() {
  var meals = [];
  var mealOptions = [];

  var addMeal = function(newMeal){
    meals.push(newMeal);
  };
  
  var updateMeals = function() {
    mealOptions.forEach(function(currentValue) {
      currentValue.forEach(function(currentMeal) {
        meals.push(currentMeal);
      });
    });
  };

  return {
    meals: meals,
    mealOptions: mealOptions,
    addMeal: addMeal,
    updateMeals: updateMeals
  };
});

