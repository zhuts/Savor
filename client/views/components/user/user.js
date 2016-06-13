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
  var friendsChecked = false;

  function getAll(id, friendTag) {
    $http.get('/api/users/' + id).then(function(res) {
      var mealsList = res.data.meals;

      // Adds a tag to our friends' meal options so that we can pull their nickname
      if (friendTag) {
        mealsList.forEach(function(currentMeal) {
          currentMeal.friendTag = friendTag;
        });
      }
      
      Meals.updateMeals(mealsList);
      
      // We only want to check the friends of the current user
      if (!friendsChecked) {
        friendsChecked = true;
        checkFriends(res.data.friends);
      }
    });
  }
  getAll($scope.userOnRootScope.user_id);
  
  var checkFriends = function(friendArray) {
    friendArray.forEach(function(currentFriend) {
      getAll(currentFriend.userID, currentFriend.username);
    });
  };
  
  
  
})

.factory('Meals', function() {
  var meals = [];
  var mealOptions = [];

  var addMeal = function(newMeal){
    meals.push(newMeal);
  };
  
  var updateMeals = function(array) {
    array.forEach(function(meal) {
      meals.push(meal);
    });
    
    
    // mealOptions.forEach(function(currentValue) {
    //   currentValue.forEach(function(currentMeal) {
    //     console.log('meals ', meals);
    //     console.log('currentMeal ', currentMeal);
    //     meals.push(currentMeal);
    //   });
    // });
  };

  return {
    meals: meals,
    mealOptions: mealOptions,
    addMeal: addMeal,
    updateMeals: updateMeals
  };
});

