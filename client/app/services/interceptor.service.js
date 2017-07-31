/**
 * @export
 * @class ResourceInterceptor
 */
export default class ResourceInterceptor {
    constructor($location, $httpProvider, Session) {
        'ngInject';

        this.Session = Session;
        this.$location = $location;
        this.$httpProvider = $httpProvider;
    }

    request(config) {
        if(this.Session.getToken()){
            config.headers['Authorization'] = 'Bearer ' + this.Session.getToken();
        } else {
            delete config.headers['Authorization'];
        }

        return config;
    }

    responseError(response) { console.log(response);
        // if(response.data.message !== null || response.data.message !== ' '){
        //     //$location.path('/admin/login');
        // }
        //
        // if(response.status === 422){
        //     this.$location.path('/admin/login');
        // }

        return response;
    }
}
