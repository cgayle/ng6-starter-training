import angular from 'angular';
import uiRouter from 'angular-ui-router';
import $ from 'jquery';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Session from './factories/session.factory';
import Factories from './factories/factories';
import AppComponent from './app.component';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import ngFlash from 'angular-flash-alert';

// js
import 'metismenu/dist/metisMenu.min';
import './assets/js/template.js';

// css
import 'normalize.css';
import './assets/css/template.css';
import 'font-awesome/css/font-awesome.css';
import 'angular-ui-bootstrap';
import 'metismenu/dist/metisMenu.min.css';

// Config
import * as Config from '../../config';
import * as ServerConstants from './constants/server.constants';

require('bootstrap-loader');


angular.module('app', [
    uiRouter,
    ngMessages,
    ngMaterial,
    ngFlash,
    Common,
    Components,
    Services,
    Factories
  ])

    .config(($locationProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .run(($state, $http, $rootScope, Session) => {
     "ngInject";


     // Check is user is already logged in
     // Check token
         if(!Session.isAuthenticated()){
             $state.go('login');
             return;
         }

        if (Session.getToken()) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + Session.getToken();
        }
    })

  .component('app', AppComponent)

  // Global Config
  .constant('CONFIG', Config.config)
  .constant('SERVER', ServerConstants.values);
