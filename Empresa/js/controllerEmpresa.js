app.controller('controllerEmpresa',function($scope,$location){

  $scope.redirect = function(url){
    $location.path(url);
  };

  $scope.discardObj = [{id:1,descricao:"Paper"},
                       {id:2,descricao:"Plastic"},
                       {id:3,descricao:"Metal"}];

  $scope.adicionarItens = function(){
  	$location.path("/home")
  } 
          

})