angular
    .module('savor.login', [])
    .controller('loginController', loginController);

function loginController(auth, store, $location, ngDialog, $scope, $rootScope, $http) {
    var vm = this;
    vm.login = login;
    vm.auth = auth;
    
    $rootScope.isUserReallyAuthenticated = vm.auth.isAuthenticated;
    
    var sendUserPost = function (data) {
    $http({
      method: "POST",
      data: data,
      url: '/api/users/'
    });
  };
    
    
    function login() {
      console.log("Login Success");
      
      // The auth service has a signin method that
      // makes use of Auth0Lock. If authentication
      // is successful, the user's profile and token
      // are saved in local storage with the store service
      auth.signin({}, function(profile, token) {
        store.set('profile', profile);
        store.set('token', token);
        $rootScope.isUserReallyAuthenticated = vm.auth.isAuthenticated;
        $rootScope.userOnRootScope = profile;
        
        // ************* check this userObject out *************
        var userObject = {
          userID: profile.userID,
          email: profile.email,
          username: profile.username,
          userAvatar: profile.picture
        };
        sendUserPost(userObject);
        
        $location.path('/user');
        if (!$rootScope.$$phase) $rootScope.$apply();
      }, function(error) {
        console.log(error);
      });
    }
    // Immediately invoke to have pop-up on the first screen
    login();
}
