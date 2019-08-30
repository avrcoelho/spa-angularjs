import bootbox from 'bootbox';

export default function Details(
  $scope,
  $rootScope,
  $routeParams,
  $filter,
  $location,
  CustomerService,
) {
  $rootScope.title = $rootScope.language.browserTitle.details;

  $scope.toastInfo = function(message) {
    var x = document.getElementById('toast-info');
    x.textContent = message;
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 3000);
  };

  CustomerService.getDataCustomer($routeParams.id).then(
    function(response) {
      if (!response.data) {
        $scope.toastInfo(
          $rootScope.language.toastMessages.failure.getDataCustomer,
        );

        return false;
      }

      $scope.firstName = response.data.firstName;
      $scope.lastName = response.data.lastName;
      $scope.cpf = response.data.cpf;
      $scope.birth = $filter('date')(response.data.birth, 'ddMMyyyy');
      $scope.age = response.data.age;
      $scope.profission = response.data.profission;
    },
    function error(response) {
      $scope.toastInfo(
        $rootScope.language.toastMessages.failure.getDataCustomer,
      );
    },
  );

  $scope.calcAge = function(birth) {
    $scope.age = Number(new Date().getFullYear()) - Number(birth.substr(4, 4));
  };

  $scope.formatData = function(date) {
    const dateFormated = `${date.substr(4, 4)}-${date.substr(
      2,
      2,
    )}-${date.substr(0, 2)}`;

    return dateFormated;
  };

  $scope.updateCustomer = function($event, isValid) {
    $event.preventDefault();

    if (isValid) {
      $scope.isLoading = true;

      const dateFormated = $scope.formatData($scope.birth);
      const data = {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        birth: dateFormated,
        age: $scope.age,
        profission: $scope.profission,
      };

      CustomerService.updateCustomer($routeParams.id, data).then(
        function(response) {
          $scope.isLoading = false;
          $scope.updateMode = false;

          $scope.toastInfo(
            $rootScope.language.toastMessages.success.updateCustomer,
          );
        },
        function error(response) {
          $scope.isLoading = false;
          $scope.toastInfo(
            $rootScope.language.toastMessages.failure.updateCustomer,
          );
        },
      );
    }
  };

  $scope.deleteCustomer = function() {
    bootbox.confirm({
      message: $rootScope.language.deleteMessage,
      buttons: {
        confirm: {
          label: $rootScope.language.btn.confirm,
          className: 'btn-info',
        },
        cancel: {
          label: $rootScope.language.btn.cancel,
          className: 'btn-light',
        },
      },
      callback: function(result) {
        if (result) {
          $scope.isLoadingDelete = true;
          $scope.$apply();

          CustomerService.deleteCustomer($routeParams.id).then(
            function(response) {
              $scope.isLoadingDelete = false;

              $location.path('/');
            },
            function error(response) {
              $scope.isLoadingDelete = false;

              $scope.toastInfo(
                $rootScope.language.toastMessages.failure.deleteCustomer,
              );
            },
          );
        }
      },
    });
  };
}
