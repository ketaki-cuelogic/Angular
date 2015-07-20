var app 	= angular.module( 'AssignmentApp', [ 'ngRoute' ] );

app.run(function( $rootScope, $location ){
	
	$rootScope.isLoggedIn 	= false;
	$rootScope.currPage 	= '/home';
	$rootScope.validUser 	= {
			userName : 'admin@demo.lcl',
			password : 'password'
	};

	$rootScope.getCookie = function( cname ) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	    }
	    return false;
	} 

	$rootScope.$on( '$locationChangeStart', function(){
		currLocation = $location.path();
		
		if( $rootScope.getCookie( 'isLoggedIn' ) ) {
			$rootScope.isLoggedIn 	= true;
		}

		if( $rootScope.isLoggedIn || currLocation === '/home' || currLocation === '/' ) {
			$rootScope.currPage 	= currLocation;
		} else {
			$location.path( '/login' );
			$rootScope.currPage = '/login';
		}
	});
});