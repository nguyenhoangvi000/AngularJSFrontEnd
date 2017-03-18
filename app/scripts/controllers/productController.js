(function () {
    'use strict';

    angular
        .module('sbAdminApp')
        .controller('productController', ['$scope', 'productFactoryService', ProductController])

    /** @ngInject */
    function ProductController($scope, productFactoryService) {

        $scope.getAllCustomers = function () {
            productFactoryService.getAllPizza().then(function (response) {
                $scope.products = response.data;
            }, function (error) {
                var pizza = {

                }
            })
        }

        $scope.getCustomer = function () {

        }

        $scope.insertCustomer = function () {

        }


    }

}());