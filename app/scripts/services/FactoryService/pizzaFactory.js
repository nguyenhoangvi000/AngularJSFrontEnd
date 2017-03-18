angular.module('sbAdminApp').factory('pizzaFactory', ['$scope', '$http', function ($scope, $http) {
    var urlBase = "http://localhost:3000/products";
    var pizzaFactory = {};

    pizzaFactory.getAllPizzas = function () {
        return $http.get(urlBase);
    };

    pizzaFactory.getPizza = function (id) {
        return $http.get(urlBase + '/' + id);
    }
    pizzaFactory.deletePizza = function (id) {
        return $http.delete(urlBase + '/' + id);
    }
    pizzaFactory.insertPizza = function (pizza) {
        return $http.put(urlBase + '/' + pizza);
    }


}]);