var youwontFactory = angular.module('youwont.factory', []);
//Facebook OAuth Login Factory
var facebookLoginFactory = angular.module('FacebookLogin', []);
facebookLoginFactory.factory('authLogin', function($state) {
  //URL to the sayiwont Firebase DB
  var appURL = "https://sayiwont.firebaseio.com";
  var login = {};
  //reference to our Firebase DB
  login.ref = new Firebase(appURL);
  //function to perform OAuth login with FB
  login.logUserIn = function() {
    login.ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        //user is successfully logged in and routed to the home page
        console.log("Authenticated successfully with payload:", authData);
        $state.go('home')
      }
    });
  }
  login.logout = function() {
    //routes to the login page and unauthorizes the user
    login.ref.unauth();
    $state.go('login')
  }
  login.checkState = function() {
    //get auth status
    console.log('checking state')
    var isLoggedIn = false;
    var authData = login.ref.getAuth();
    if (authData) {
      console.log('User is logged in!')
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
    return isLoggedIn
  };
  return login;
});