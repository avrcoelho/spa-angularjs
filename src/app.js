import angular from 'angular';
import ngRoute from 'angular-route';
import uiMask from 'angular-ui-mask';

import language from './config/languageConfig';

const app = angular.module('mainApp', [ngRoute, uiMask]);

app.run(function($rootScope) {
  $rootScope.language = language();
});

export default app;
