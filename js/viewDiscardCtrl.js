app.controller('viewDiscardCtrl',function($scope, $location){

  $scope.discardObj = [{id:1,descricao:"Paper"},
                       {id:2,descricao:"Plastic"},
                       {id:3,descricao:"Metal"}];
  $scope.arParams = [];

  $scope.redirect = function(url){
    $location.path(url);
  };

  var adicionarChecado

  $scope.adicionarItens = function(){
  	angular.forEach($scope.discardObj, function(discard){
  		if (discard.checked){
  			$scope.arParams.push(angular.copy(discard))
  		}
  	})
  	console.log($scope.arParams)


  }

});
