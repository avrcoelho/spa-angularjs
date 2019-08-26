import app from "../config/routerConfig";

app.controller("homeController", [
  "$scope",
  function($scope) {
    $scope.title = "Hello Angular";
  }
]);
