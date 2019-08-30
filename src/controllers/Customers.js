export default function Customers(
  $scope,
  $rootScope,
  $location,
  CustomerService,
) {
  $rootScope.title = $rootScope.language.browserTitle.customers;

  $scope.toastInfo = function(message) {
    var x = document.getElementById('toast-info');
    x.textContent = message;
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 3000);
  };

  CustomerService.getCustomers().then(
    function(response) {
      $scope.customers = response.data;
    },
    function error(response) {
      $scope.toastInfo($rootScope.language.toastMessages.failure.getCustomers);
    },
  );

  $scope.handleDetailsCustomer = function(id) {
    $location.path(`/details/${id}`);
  };
}
