import angular from 'angular';
import Session from './session.factory';

// Create the module where our functionality can attach to
let factoriesModule = angular
    .module('app.factories', [])
    .service({
        Session
    })
    .name

export default factoriesModule;
