app.controller('codeValidatorCtrl',function($scope,$location){
	
  $scope.redirect = function(url){
    	$location.path(url);
  	}
})