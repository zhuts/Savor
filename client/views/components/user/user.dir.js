  angular
    .module('savor.user', [])// we need to sort this out
    .directive('user', user);
  
    function user() {
    return {
      templateUrl: '/views/components/user/user.tpl.html',
      controller: userController,
      controllerAs: 'user'
    };
  }
  