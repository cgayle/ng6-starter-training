/**
 * Helpers for managing
 * the user's session
 *
 * @export
 * @class Session
 */
export default class Session {
    constructor($window) {
        'ngInject';

        this.$window = $window;
    }

    setToken(token) {
        // Set local storage token
        this.$window.localStorage.setItem('sessionToken', token);
        return "hello";
    }

    getToken() {
        // Get local storage token
        var sessionToken = this.$window.localStorage.getItem('sessionToken');

        if (sessionToken !== undefined) {
            return sessionToken;
        }
    }

    removeToken() {
        // Remove local storage token
        this.$window.localStorage.removeItem('sessionToken');
        this.$window.localStorage.removeItem('sessionUser');
    }

    isAuthenticated() {
        // Check if user is authenticated
        var token = this.getToken();

        if (token !== null) {
            return true;
        }

        return false;
    }
}
