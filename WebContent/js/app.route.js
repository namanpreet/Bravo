
bravoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.

	when('/nominate',{
		templateUrl: 'components/nominate/nominate.tpl.html',
		controller: 'nominateController'
	})
	.when('/hrapproval',{
		templateUrl: 'components/hrapproval/hrapproval.tpl.html',
		controller: 'hrapprovalController'
	})
	.when('/success',{
		templateUrl: 'components/success/success.tpl.html'
	})
	
}]);

