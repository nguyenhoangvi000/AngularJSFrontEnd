(function () {
    'use strict';

    angular
        .module('sbAdminApp')
        .controller('productController', ['$scope', '$http', ProductController])

    /** @ngInject */
    function ProductController($scope, $http) {
        var vm = this;

        init();

        function init() {
            $http.get('http://localhost:3004/products').then(function (response) {
                $scope.products = response.data;
                console.log(response.data);
            });
        }

    }

}());