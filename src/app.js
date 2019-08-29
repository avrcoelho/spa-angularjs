import angular from 'angular';
import ngRoute from 'angular-route';
import uiMask from 'angular-ui-mask';

// config
import routes from './config/routerConfig'
import language from './config/languageConfig';

// controllers
import CustomersCtrl from './controllers/Customers'
import DeatilsCtrl from './controllers/Details'
import RegisterCtrl from './controllers/Register'

// services
import CustomerService from './services/Customers'

const app = angular
  .module('mainApp', [ngRoute, uiMask])
  .run(function($rootScope) {
    $rootScope.language = language();
  });
  .service('CustomerService', CustomerService)
  .controller('Customers', CustomersCtrl)
  .controller('Details', DeatilsCtrl)
  .controller('Register', RegisterCtrl)
  .config(routes)

export default app;
