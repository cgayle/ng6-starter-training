import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Profile from './profile/profile';
import Company from './company/company';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  Profile,
  Company
])

.name;

export default componentModule;
