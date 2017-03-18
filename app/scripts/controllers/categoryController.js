
(function () {
    'use strict';

    angular
        .module('sbAdminApp')
        .controller('CategoryController', ['$scope', '$http', CategoryController])

    /** @ngInject */
    function CategoryController($scope, $http) {
        var vm = this;

        init();

        function init() {
            $http.get("http://10.19.1.24:8000/categories")
                .then(function (response) {
                    console.log(response);
                    $scope.categories = response.data;
                });
        }

    }

}());
