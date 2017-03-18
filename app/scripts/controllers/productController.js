(function () {
    'use strict';

    angular
        .module('sbAdminApp')
        .controller('productController', ['$scope', 'pizzaFactory', ProductController])

    /** @ngInject */
    function ProductController($scope, pizzaFactory) {

        getAllPizzas();

        function getAllPizzas() {
            console.log('ok');
            // pizzaFactory.getAllPizzas().then(function (response) {
            //     $scope.products = response.data;
            // }, function (error) {

            // })
        }

        $scope.getCustomer = function () {

        }

        $scope.insertCustomer = function () {

        }


    }

}());