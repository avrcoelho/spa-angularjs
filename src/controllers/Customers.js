
 export default function Customers($scope, $rootScope, $location) {
    $rootScope.title = $rootScope.language.browserTitle.customers;

    $scope.handleDetailsCustomer = function() {
      $location.path("/details");
    };
  }
