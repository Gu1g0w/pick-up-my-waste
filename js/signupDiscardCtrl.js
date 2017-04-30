app.controller('signupDiscardCtrl',function($scope,$location){
	
	$scope.discardObj = [{id:0,descricao:""},
						 {id:1,descricao:"Paper"},
                         {id:2,descricao:"Plastic"},
                         {id:3,descricao:"Metal"}];

    $scope.redirect = function(url){
    	$location.path(url);
  	}
})