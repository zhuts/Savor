angular
    .module('savor.toolbar', [])// we need to sort this out
    .controller('toolbarController', toolbarController);

function toolbarController(auth, store, $location, ngDialog, $scope, $rootScope) {
    var vm = this;
    vm.logout = logout;
    vm.auth = auth;
    
    function logout() {
      console.log("Logout Success");
      // The signout method on the auth service
      // sets isAuthenticated to false but we
      // also need to remove the profile and
      // token from local storage
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $location.path('/');
      if (!$rootScope.$$phase) $rootScope.$apply();
    }

    $scope.openReview = function() {
      ngDialog.open({template: '/views/components/review/review.tpl.html',
        controller: 'reviewController',
        scope: $scope,
        className: 'ngdialog-theme-default dialogwidth800'
      });
    };
}
