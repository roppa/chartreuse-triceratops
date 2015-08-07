var youwontFactory = angular.module('youwont.factory', []);

//Facebook OAuth Login Factory
var facebookLoginFactory = angular.module('FacebookLogin',[]);
facebookLoginFactory.factory('authLogin',function(){
	//URL to the sayiwont Firebase DB
	var appURL = "https://sayiwont.firebaseio.com";
	var login = {};
	//reference to our Firebase DB
	login.ref = new Firebase(appURL);

	//function to perform OAuth login with FB
		
		login.ref.authWithOAuthPopup("facebook", function(error, authData) {
			console.log('hello world')
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	

	console.log('we in here')

	return login;
});