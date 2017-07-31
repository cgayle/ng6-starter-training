import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Header,
  Sidebar
])
  
.name;

export default commonModule;
