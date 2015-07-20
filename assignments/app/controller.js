app.controller( 'AssignmentController', function( $scope, $rootScope, $location ){
	this.isCurrPage = function( page ){
		return page === $rootScope.currPage ? true : false;
	};

	this.logout = function() {
		$rootScope.isLoggedIn = false;
		document.cookie="isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		$location.path( '/home' );
	};
});

app.controller( 'LoginController', function( $scope, $rootScope, $location ){
	this.user 	= {};
	this.errMsg	= '';
	this.login = function(){
		if( this.user.userName === $rootScope.validUser.userName && this.user.password === $rootScope.validUser.password ) {
			document.cookie="isLoggedIn=1";
			$rootScope.isLoggedIn = true;
			this.user = {};
			$location.path( '/home' );
			return;
		}
		
		$rootScope.isLoggedIn = false;
		this.errMsg = "Wrong username or password";
	};
});

app.controller( 'HelloController', function(){
	this.title = 'Hello world!!';
});

app.controller( 'CareersController', function(){
});

app.controller( 'AboutController', function(){
});

app.controller( 'DocController', function(){
});

app.controller( 'ClientsController', function(){
});

app.controller( 'TermsController', function(){
});