'use strict';

angular.module('karmaPocModule')
    .controller('PocController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
        $scope.name = 'World';

        $scope.user = dataFactory.getSpecificData(0);

        $scope.users = dataFactory.getData();
    }])
;
