/**
 * @export
 * @class User
 */
export default class User {
    constructor($http, CONFIG, SERVER) {
        'ngInject';

        this.$http = $http;

        // Constants
        this.CONFIG = CONFIG;
        this.SERVER = SERVER;
    }

    getLoggedInUserInfo() {
        return this.$http.get(this.CONFIG.apiHost + this.SERVER.loggedInUserInfo).then(response => response.data);
    }


}
