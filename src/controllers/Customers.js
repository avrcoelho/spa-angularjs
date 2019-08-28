import app from '../config/routerConfig';

app.controller('Customers', [
  '$scope',
  '$rootScope',
  '$location',
  function($scope, $rootScope, $location) {
    $rootScope.title = $rootScope.language.browserTitle.customers;

    $scope.handleDetailsCustomer = function() {
      $location.path('/details');
    };
  },
]);
