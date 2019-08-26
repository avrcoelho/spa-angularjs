import app from "../app";

app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "/src/app/views/Home.html",
      controller: "homeController"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix("");
});

export default app;
