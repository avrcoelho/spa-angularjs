import app from '../config/routerConfig';

app.controller('Customers', [
  '$scope',
  '$location',
  function($scope, $location) {
    $scope.handleDetailsCustomer = function() {
      $location.path('/details');
    };
  },
]);
