import angular from 'angular';
import User from './user/user';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  User,
  Header,
  Sidebar
])
  
.name;

export default commonModule;
