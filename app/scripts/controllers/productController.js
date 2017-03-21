
'use strict';

angular
    .module('sbAdminApp')
    .controller('productController', ['$scope', 'pizzaFactory',
        function ProductController($scope, pizzaFactory) {

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



            $scope.deletePizza = function (id) {
                pizzaFactory.deletePizza(id).then(function (response) {
                    console.log(response.data);
                    getAll();
                }, function (error) {
                    console.log(error);
                })
            }

            $scope.insertPizza = function () {
                var pizza = {
                    id: "20",
                    name: $scope.productName,
                    description: $scope.description,
                    quantity: $scope.quantity,
                    price: $scope.price,
                    recipe: [
                        {
                            "id": 3,
                            "name": "Chili",
                            "price": 2
                        },
                        {
                            "id": 4,
                            "name": "Pepper",
                            "price": 2.5
                        }]
                }
                $http.post('http://localhost:3000/products', pizza).then(function () {
                    $scope.products.push(pizza);
                    console.log('ok');
                }, function () {

                });

            }
        }
    ]);