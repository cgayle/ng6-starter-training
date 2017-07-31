import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerComponent from './head.component';

let headerModule = angular.module('header', [
  uiRouter
])

.component('header', headerComponent)
  
.name;

export default headerModule;
