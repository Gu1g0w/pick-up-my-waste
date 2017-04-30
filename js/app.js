var app = angular.module("pickupMyWaste", ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider.when("/",{
  	templateUrl: "views/home.html",
    controller:  "homeCtrl"
  })
  .when("/viewDiscard",{
  	templateUrl: "views/viewDiscard.html",
    controller:  "viewDiscardCtrl"
  })
  .when("/partners",{
  	templateUrl: "views/partners.html",
    controller:  "partnersCtrl"
  })

  .when("/login",{
    templateUrl: "login.html",
    controller:  "controllerLogin"
  })

  .when("/homeMotorista",{
    templateUrl: "Motorista/views/homeMotorista.html",
    controller:  "controllerMotorista"
  })

  .when("/cadastrarEmpresa",{
    templateUrl: "Empresa/views/empresaCadastrar.html",
    controller:  "controllerEmpresa"
  })

  .when("/cadastrarItensEmpresa",{
    templateUrl: "views/viewDiscard.html",
    controller:  "controllerEmpresa"
  })

  .when("/aboutUs",{
    templateUrl: "views/aboutUs.html"
  })

  .when("/codeValidator",{
    templateUrl: "views/codeValidator.html",
    controller:  "codeValidatorCtrl"
  })

.when("/signupDiscard",{
    templateUrl: "views/signupDiscard.html",
    controller:  "signupDiscardCtrl"
  })

})
// //"manterpedido" vai aparacer no navegador
// .when("/manterpedido",{
// 	templateUrl: "views/manterpedido.html",
// 	controller: "controllerManterpedido"
// })
//
// //"manterproduto" vai aparacer no navegador
// .when("/manterproduto",{
// 	templateUrl: "views/manterproduto.html",
// 	controller: "manterControllerProduto"
// })
//
// //"cadastrarproduto" vai aparacer no navegador
// .when("/cadastrarproduto",{
// 	templateUrl: "views/cadastrarproduto.html",
// 	controller: "manterControllerProduto"
// })
//
// .when("/editar/:codigo",{
// 	templateUrl: "views/editarproduto.html",
// 	controller: "controllerEditarproduto"
// })
