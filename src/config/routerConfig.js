import app from '../app';

app.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: require('../views/Customers.html'),
        controller: 'Customers',
      })
      .when('/register', {
        template: require('../views/Register.html'),
        controller: 'Register',
      })
      .when('/details', {
        template: require('../views/Details.html'),
        controller: 'Details',
      })
      .otherwise({
        redirectTo: '/',
      });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  },
]);

export default app;
