  angular
    .module('savor.friends', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .directive('friends', friends);

    function friends() {
    return {
      templateUrl: '/views/components/friends/friends.html',
      controller: friendsController,
      controllerAs: 'friends'
    };
  }
