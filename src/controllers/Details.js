import bootbox from "bootbox";

export default function Details($scope, $rootScope) {
    $rootScope.title = $rootScope.language.browserTitle.details;

    $scope.isLoadingDelete = false;

    $scope.toastInfo = function(message) {
      var x = document.getElementById("toast-info");
      x.textContent = message;
      x.className = "show";
      setTimeout(function() {
        x.className = x.className.replace("show", "");
      }, 3000);
    };

    $scope.updateCustomer = function($event, isValid) {
      $event.preventDefault();

      if (isValid) {
        $scope.isLoading = true;
      }
    };

    $scope.deleteCustomer = function() {
      bootbox.confirm({
        message: $rootScope.language.deleteMessage,
        buttons: {
          confirm: {
            label: $rootScope.language.btn.confirm,
            className: "btn-info"
          },
          cancel: {
            label: $rootScope.language.btn.cancel,
            className: "btn-light"
          }
        },
        callback: function(result) {
          $scope.isLoadingDelete = true;
          $scope.$apply();

          result && $scope.toastInfo("Excluído com sucesso!");
        }
      });
    };
  }
