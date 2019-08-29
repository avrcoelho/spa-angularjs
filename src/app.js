import angular from 'angular';
import ngRoute from 'angular-route';
import uiMask from 'angular-ui-mask';

import routes from './config/routerConfig'

import language from './config/languageConfig';

import Customers from './controllers/Customers'
import Deatils from './controllers/Details'
import Register from './controllers/Register'

const app = angular
  .module('mainApp', [ngRoute, uiMask])
  .controller('Customers', Customers)
  .controller('Details', Deatils)
  .controller('Register', Register)
  .config(routes)
  .run(function($rootScope) {
    $rootScope.language = language();
  });

export default app;
