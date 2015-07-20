app.directive( 'siteFooter', function(){
	return {
		restrict : 'E',
		templateUrl : './partials/footer.html'

	};
});

app.directive( 'siteMenu', function(){
	return {
		restrict : 'E',
		templateUrl : './partials/menu.html'

	};
});

app.directive( 'siteBanner', function(){
	return {
		restrict : 'E',
		templateUrl : './partials/site_banner.html',
		controller:function(){
			$('#slider').nivoSlider();
		},
		controllerAs:'SiteBannerCtrl'
	};
});