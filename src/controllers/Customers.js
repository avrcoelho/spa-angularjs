
 export default function Customers($scope, $rootScope, $location, CustomerService) {
    $rootScope.title = $rootScope.language.browserTitle.customers;

    CustomerService.getCustomers().then(
      function (response) {
        console.log(response)
      },
      function myError(response) {

      });


    $scope.handleDetailsCustomer = function() {
      $location.path("/details");
    };
  }
