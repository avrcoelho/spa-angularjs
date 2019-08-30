import Customers from '../views/Customers.html';
import Details from '../views/Details.html';
import Register from '../views/Register.html';

export default function routes($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      template: Customers,
      controller: 'Customers',
    })
    .when('/register', {
      template: Register,
      controller: 'Register',
    })
    .when('/details/:id', {
      template: Details,
      controller: 'Details',
    })
    .otherwise({
      redirectTo: '/',
    });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
}
