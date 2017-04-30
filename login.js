app.controller('controllerLogin',function($scope,$location){

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
})

$scope.link = function(){
	if($scope.name == "janaina"){
		this.redirect('/');
	}else if($scope.name == "vinicius"){
		this.redirect('/homeMotorista');
	}else{
		this.redirect('/cadastrarEmpresa');
	}
}

$scope.redirect = function(url){
    $location.path(url);
  };
});