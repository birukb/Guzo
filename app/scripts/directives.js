/*global define*/
define(['angular'], function(angular) {
    'use strict'  ;

    return angular.module('guzo.directives', [])
        .directive('guzoheader', function () {
            return {
                restrict: 'E',
                templateUrl:'partials/header.html'
            };
        });
});