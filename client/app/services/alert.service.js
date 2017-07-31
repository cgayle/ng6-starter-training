/**
 * @export
 * @class AlertService
 */
export default class AlertService {
    constructor($mdToast) {
        'ngInject';

        this.$mdToast = $mdToast;
    }

    alert(message) {
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        var toastPosition = angular.extend({}, last);

        var getToastPosition = function () {
            sanitizePosition();

            return Object.keys(toastPosition)
                .filter(function (pos) {
                    return toastPosition[pos];
                })
                .join(' ');
        };

        function sanitizePosition() {
            var current = toastPosition;
        }

        var pinTo = getToastPosition();

        return this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(message)
                .position(pinTo)
                .hideDelay(3000)
        );
    }
}
