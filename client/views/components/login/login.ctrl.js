angular
    .module('savor.login', [])
    .controller('loginController', loginController);

function loginController(auth, store, $location, ngDialog, $scope) {
    var vm = this;
    vm.login = login;
    vm.logout = logout;
    vm.auth = auth;
    
    function login() {
      console.log("Login Success");
      // The auth service has a signin method that
      // makes use of Auth0Lock. If authentication
      // is successful, the user's profile and token
      // are saved in local storage with the store service
      auth.signin({}, function(profile, token) {
        store.set('profile', profile);
        store.set('token', token);
        $location.path('/user');
        if (!$rootScope.$$phase) $rootScope.$apply();
      }, function(error) {
        console.log(error);
      });
    }
    login();
}
