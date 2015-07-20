app.config( [ '$routeProvider', function( $routeProvider ){
	$routeProvider.when( '/', {
			controller:'HelloController',
			controllerAs:'HelloCtrl',
			templateUrl:'./partials/home.html'
		})
	.when('/home', {
			controller:'HelloController',
			controllerAs:'HelloCtrl',
			templateUrl:'./partials/home.html'
		})
	.when('/careers', {
			controller:'CareersController',
			controllerAs:'CareersCtrl',
			templateUrl:'./partials/careers.html'
		})
	.when('/about', {
			controller:'AboutController',
			controllerAs:'AboutCtrl',
			templateUrl:'./partials/about.html'
		})
	.when('/doc', {
			controller:'DocController',
			controllerAs:'DocCtrl',
			templateUrl:'./partials/doc.html'
		})
	.when('/clients', {
			controller:'ClientsController',
			controllerAs:'ClientsCtrl',
			templateUrl:'./partials/clients.html'
		})
	.when('/terms-conditions', {
			controller:'TermsController',
			controllerAs:'TermsCtrl',
			templateUrl:'./partials/terms-conditions.htm'
		})
	.when('/login', {
			controller:'LoginController',
			controllerAs:'LoginCtrl',
			templateUrl:'./partials/login.html'
		})
	.otherwise({redirectTo:'/'});
}]);