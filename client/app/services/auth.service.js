/**
 * @export
 * @class Auth
 */
export default class Auth {
    constructor($http, CONFIG, SERVER) {
        'ngInject';

        this.$http = $http;

        // Constants
        this.CONFIG = CONFIG;
        this.SERVER = SERVER;
    }

    login(data) {
        return this.$http.post(this.CONFIG.apiHost + this.SERVER.login, data).then(response => response.data);
    }

    logout(token) {
        return this.$http.post(this.CONFIG.apiHost + this.SERVER.logout, token).then(response => response.data);
    }
}
