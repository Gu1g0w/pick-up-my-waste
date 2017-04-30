app.controller('partnersCtrl',function($scope, $location){

  $scope.empresaObj =[{id:1, nome:"Harmoniza"},
                      {id:2, nome:"Eco Reciclar"},
                      {id:3, nome:"Foco na Reciclagem"}];

  $scope.redirect = function(url){
    $location.path(url);
  };

});
