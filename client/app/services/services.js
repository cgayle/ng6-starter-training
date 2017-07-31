import angular from 'angular';
import Auth from './auth.service';
import User from './user.service';
import ResourceInterceptor from './interceptor.service';
import AlertService from './alert.service'

// Services module - register all services
let servicesModule = angular.module('app.services', [])
    .service({
        Auth,
        User,
        ResourceInterceptor,
        AlertService
    })
    .name

export default servicesModule;
