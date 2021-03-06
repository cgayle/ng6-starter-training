import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

$stateProvider
    .state('login', {
        url: '/login',
        component: 'login'
    });
})

.component('login', loginComponent)

// .service('Auth', Authentication)

.name;

export default loginModule;
