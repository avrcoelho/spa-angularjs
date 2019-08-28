import app from '../config/routerConfig';

app.controller('Register', [
  '$scope',
  '$rootScope',
  function($scope, $rootScope) {
    $rootScope.title = 'Clientes | Cadastro';

    $scope.toastInfo = function(message) {
      var x = document.getElementById('toast-info');
      x.textContent = message;
      x.className = 'show';
      setTimeout(function() {
        x.className = x.className.replace('show', '');
      }, 3000);
    };

    $scope.registerCustomer = function($event, isValid) {
      $event.preventDefault();

      if (isValid) {
        $scope.isLoading = true;
      }
    };
  },
]);
