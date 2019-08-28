import app from '../config/routerConfig';

app.controller('Customers', [
  '$scope',
  '$rootScope',
  '$location',
  function($scope, $rootScope, $location) {
    $rootScope.title = 'Clientes | Início';

    $scope.handleDetailsCustomer = function() {
      $location.path('/details');
    };
  },
]);
