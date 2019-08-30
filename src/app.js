import angular from 'angular';
import ngRoute from 'angular-route';
import uiMask from 'angular-ui-mask';

// config
import routes from './config/routerConfig';
import language from './config/languageConfig';

// controllers
import CustomersCtrl from './controllers/Customers';
import DeatilsCtrl from './controllers/Details';
import RegisterCtrl from './controllers/Register';

// services
import CustomerFactory from './factories/Customers';

import './styles/styles.scss';

const app = angular
  .module('mainApp', [ngRoute, uiMask])
  .run([
    '$rootScope',
    function($rootScope) {
      $rootScope.language = language();
    },
  ])
  .factory('CustomerService', ['$http', CustomerFactory])
  .controller('Customers', [
    '$scope',
    '$rootScope',
    '$location',
    'CustomerService',
    CustomersCtrl,
  ])
  .controller('Details', [
    '$scope',
    '$rootScope',
    '$routeParams',
    '$filter',
    '$location',
    'CustomerService',
    DeatilsCtrl,
  ])
  .controller('Register', [
    '$scope',
    '$rootScope',
    'CustomerService',
    RegisterCtrl,
  ])
  .config(['$routeProvider', '$locationProvider', routes]);

export default app;
