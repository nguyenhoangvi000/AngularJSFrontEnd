
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
            $http.get("http://localhost:3004/categories")
                .then(function (response) {
                    console.log(response);
                    $scope.categories = response.data;
                });
        }

    }

}());
