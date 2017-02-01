angular.module('starter.controllers', [])

.controller('register', function($state, $scope) {
  $scope.doLogin = function() {
   $state.go('app.suggestions-row');
   $scope.menu="white"; 
  };
})

.controller('login', function($state, $scope) {
		$scope.menu="white"; 
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


  $scope.suggestionsSq = [
    { title: 'Juan', id: 1, thumbnail:"company/articulacion-white.png" },
    { title: 'Luis', id: 2, thumbnail:"company/preferente-white.png" },
    { title: 'Andres', id: 3, thumbnail:"company/deeploy-white.png" },
    { title: 'Luisa', id: 4, thumbnail:"company/brm-white.png" },
    { title: 'Matilde', id: 5, thumbnail:"company/articulacion-white.png" },
    { title: 'Ana', id: 6, thumbnail:"company/preferente-white.png" },
    { title: 'Juan', id: 1, thumbnail:"company/articulacion-white.png" },
    { title: 'Luis', id: 2, thumbnail:"company/preferente-white.png" },
    { title: 'Andres', id: 3, thumbnail:"company/deeploy-white.png" },
    { title: 'Luisa', id: 4, thumbnail:"company/brm-white.png" },
    { title: 'Matilde', id: 5, thumbnail:"company/articulacion-white.png" },
    { title: 'Ana', id: 6, thumbnail:"company/preferente-white.png" }
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

  $ionicModal.fromTemplateUrl('templates/filter.html', {
    scope: $scope
  }).then(function(modalFilter) {
    $scope.modalFilter = modalFilter;
  });

  $scope.closeFilter = function() {
    $scope.modalFilter.hide();
  };

  $scope.filter = function() {
    $scope.modalFilter.show();
  };


  $ionicModal.fromTemplateUrl('templates/order.html', {
    scope: $scope
  }).then(function(modalOrder) {
    $scope.modalOrder = modalOrder;
  });

  $scope.closeOrder = function() {
    $scope.modalOrder.hide();
  };

  $scope.order = function() {
    $scope.modalOrder.show();
  };

  $scope.viewSquare = function() {
   		$state.go('app.suggestions-square');
  };

  $scope.viewRow = function() {
   		$state.go('app.suggestions-row');
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

.controller('steptwo', function($scope, $state,$ionicModal) {

  $scope.stepthree = function() {
   $state.go('app.stepthree');
  }

  $scope.finish = function() {
   $state.go('app.suggestions-row');
  }

  $ionicModal.fromTemplateUrl('templates/alert.html', {
    scope: $scope
  }).then(function(modalAlert) {
    $scope.modalAlert = modalAlert;
  });

  $scope.closeAlert = function() {
    $scope.modalAlert.hide();
  };

  $scope.openAlert = function() {
    $scope.modalAlert.show();
  };

	$scope.message="Está seguro que desaea guardar sin subir una imagen"; 


})
.controller('stepthree', function($scope, $state) {
  $scope.finish = function() {
   $state.go('app.suggestions-row');
  }

})
;
