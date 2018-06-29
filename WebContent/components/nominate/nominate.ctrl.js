
bravoApp.controller('nominateController',['$scope','$location' ,function($scope,$location){
	
	$scope.awardTypeList = ['Technical','Management','Service','Other'];
	
	$scope.nominate = function(valid){
		
		if(!valid){
			return;
		}else{
			$location.path('success');
		}
		
	};
}]);
