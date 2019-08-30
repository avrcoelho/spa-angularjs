export default function Register($scope, $rootScope, CustomerService) {
  $rootScope.title = $rootScope.language.browserTitle.register;

  $scope.toastInfo = function(message) {
    var x = document.getElementById('toast-info');
    x.textContent = message;
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 3000);
  };

  $scope.formatData = function(date) {
    const dateFormated = `${date.substr(4, 4)}-${date.substr(
      2,
      2,
    )}-${date.substr(0, 2)}`;

    const age = Number(new Date().getFullYear()) - Number(date.substr(4, 4));

    return { dateFormated, age };
  };

  $scope.registerCustomer = function($event, isValid) {
    console.log(isValid);
    $event.preventDefault();

    if (isValid) {
      $scope.isLoading = true;

      const { dateFormated, age } = $scope.formatData($scope.birth);
      const data = {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        cpf: $scope.cpf,
        birth: dateFormated,
        age: age,
        profission: $scope.profission,
      };

      CustomerService.registerCustomer(data).then(
        function(response) {
          $scope.firstName = '';
          $scope.lastName = '';
          $scope.cpf = '';
          $scope.birth = '';
          $scope.profission = '';

          $scope.formRegister.$setPristine();

          $scope.isLoading = false;
          $scope.toastInfo(
            $rootScope.language.toastMessages.success.registerCustomer,
          );
        },
        function error(response) {
          let messageError =
            $rootScope.language.toastMessages.failure.registerCustomer;

          if (
            response.data.error &&
            response.data.error === 'customer already exists'
          ) {
            messageError =
              $rootScope.language.toastMessages.failure.customerExist;
          }

          $scope.isLoading = false;
          $scope.toastInfo(messageError);
        },
      );
    }
  };
}
