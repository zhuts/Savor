angular
    .module('savor.toolbar', [])// we need to sort this out
    .controller('toolbarController', toolbarController);

function toolbarController(auth, store, $location, ngDialog, $scope, $rootScope, $mdDialog) {
    var vm = this;
    vm.logout = logout;
    vm.auth = auth;
    
    // if ($rootScope.isUserReallyAuthenticated) {
    //   var test = JSON.parse(localStorage.getItem('profile'));
    //   console.log('test it out ', test);
    // }
    var test = window.localStorage;
    console.log('this is the ', test);
        var test2 = window.localStorage.profile;
    console.log('this is the second ', test);
    function logout() {
      console.log("Logout Success");
      // The signout method on the auth service
      // sets isAuthenticated to false but we
      // also need to remove the profile and
      // token from local storage
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $rootScope.isUserReallyAuthenticated = vm.auth.isAuthenticated;
      $location.path('/');
      if (!$rootScope.$$phase) $rootScope.$apply();
    }

    $scope.openReview = function() {
      ngDialog.open({template: '/views/components/review/review.html',
        controller: 'reviewCtrl',
        scope: $scope,
        className: 'ngdialog-theme-default dialogwidth800'
      });
    };
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
}
