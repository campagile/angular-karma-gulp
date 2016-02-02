'use strict';

angular.module('karmaPocModule')
    .factory('dataFactory', function() {
        var data = [
            {
                id:0,
                name:'Robert',
                age:32
            },
            {
                id:1,
                name:'Peter',
                age:41
            }
        ];

        var dataFac = {};

        dataFac.getData = function() {
            return data;
        };

        dataFac.getSpecificData = function(index) {
            return data[index];
        };

        return dataFac;
    })
;
