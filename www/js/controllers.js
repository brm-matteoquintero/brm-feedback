angular.module('starter.controllers', [])

.controller('register', function($state, $scope) {
  $scope.doLogin = function() {
   $state.go('app.suggestions-row');
  };
})

.controller('suggestions', function($scope) {
  $scope.suggestions = [
    { title: 'Juan', id: 1, thumbnail:"logo-articulacion.jpg" },
    { title: 'Luis', id: 2, thumbnail:"logo-preferente.jpg" },
    { title: 'Andres', id: 3, thumbnail:"logo-deeploy.jpg" },
    { title: 'Luisa', id: 4, thumbnail:"logo-brm.jpg" },
    { title: 'Matilde', id: 5, thumbnail:"logo-articulacion.jpg" },
    { title: 'Ana', id: 6, thumbnail:"logo-preferente.jpg" }
  ];
})

.controller('companies', function($scope, $state) {

  $scope.stepone = function() {
   $state.go('app.stepone');
  }

})



.controller('stepone', function($scope, $state) {

  $scope.steptwo = function() {
   $state.go('app.steptwo');
  }

})

.controller('steptwo', function($scope, $state) {

  $scope.stepthree = function() {
   $state.go('app.stepthree');
  }

})

;
