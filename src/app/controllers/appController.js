import app from "../app";

app.controller("appController", [
  "$scope",
  function($scope) {
    $scope.title = "Hello Angular";
  }
]);
