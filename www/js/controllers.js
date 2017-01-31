angular.module('starter.controllers', [])

.controller('register', function($state, $scope) {
  $scope.doLogin = function() {
   $state.go('app.suggestions-row');
  };
})

.controller('suggestions', function($scope, $state,$ionicModal, $timeout) {
  $scope.suggestions = [
    { title: 'Juan', id: 1, thumbnail:"logo-articulacion.jpg" },
    { title: 'Luis', id: 2, thumbnail:"logo-preferente.jpg" },
    { title: 'Andres', id: 3, thumbnail:"logo-deeploy.jpg" },
    { title: 'Luisa', id: 4, thumbnail:"logo-brm.jpg" },
    { title: 'Matilde', id: 5, thumbnail:"logo-articulacion.jpg" },
    { title: 'Ana', id: 6, thumbnail:"logo-preferente.jpg" }
  ];

  $ionicModal.fromTemplateUrl('templates/companies.html', {
    scope: $scope
  }).then(function(modalCompanies) {
    $scope.modalCompanies = modalCompanies;
  });

  $scope.closeCompanies = function() {
    $scope.modalCompanies.hide();
  };

  $scope.createSuggerence = function() {
    $scope.modalCompanies.show();
  };

  $scope.stepone = function() {
    $timeout(function() {
      $scope.closeCompanies();
   		$state.go('app.stepone');

    }, 1000);
  };
  
})

.controller('companies', function($scope) {


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
.controller('stepthree', function($scope, $state) {


})
;
