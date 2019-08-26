import app from "../app";

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: require("../views/Home.html"),
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
  }
]);

export default app;
