angular.module('sbAdminApp').factory('dataFactory', ['$http', function () {
    var urlBase = "";
    var dataFactory = {};

    dataFactory.getAllPizza = function () {
        return $http.get(urlBase);
    };

    dataFactory.getPizza = function (id) {
        return $http.get(urlBase + '/' + id);
    }
    dataFactory.deletePizza = function (id) {
        return $http.delete(urlBase + '/' + id);
    }
    dataFactory.insertPizza = function (pizza) {
        return $http.put(urlBase + '/' + pizza);
    }


}]);