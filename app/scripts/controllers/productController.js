
'use strict';

angular
    .module('sbAdminApp')
    .controller('productController', ['$scope', '$http', 'pizzaFactory', /** @ngInject */
        function ProductController($scope, $http, pizzaFactory) {

            getAll();

            function getAll() {
                console.log('ok');
                pizzaFactory.getAllPizzas()
                    .then(function (response) {
                        $scope.products = response.data;
                    }, function (error) {
                        console.log(error);
                    })
            }

            $scope.getPizza = function () {

            }

            $scope.insertPizza = function () {
                var pizza = {
                    id: "20",
                    name: $scope.productName,
                    description: $scope.description,
                    quantity: $scope.quantity,
                    price: $scope.price
                }
                $http.post('http://localhost:3000/products', pizza).then(function () {
                    $scope.products.push(pizza);
                }, function () {


                });

            }
        }
    ]);