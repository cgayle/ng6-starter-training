import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyComponent from './company.component';

let companyModule = angular.module('company', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

$stateProvider
    .state('company', {
        url: '/company',
        component: 'company'
    });
})

.component('company', companyComponent)

.name;

export default companyModule;
