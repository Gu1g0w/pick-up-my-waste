app.controller('homeCtrl',function($scope, $location){

  $scope.redirect = function(url){
    $location.path(url);
  };

});
