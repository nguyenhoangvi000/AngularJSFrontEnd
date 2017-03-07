'use strict';

(function () {
    'use strict';

    angular
        .module('sbAdminApp')
        .controller('orderController', ['$scope', OrderController])

    /** @ngInject */
    function OrderController(Dependencies) {
        var vm = this;

        init();

        function init() {
        }

    }

}());