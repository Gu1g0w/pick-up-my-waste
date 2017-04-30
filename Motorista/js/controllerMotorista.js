app.controller('controllerMotorista',function($scope,$location){

  $scope.redirect = function(url){
    $location.path(url);
  };

})