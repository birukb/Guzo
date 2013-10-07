/*global define*/
define([], function(){
    'use strict';

    var controllerName = 'headerCtrl',
        controller;

    controller = function($scope, HeaderMenu){
        $scope.nav = {
            maps: HeaderMenu.anonHeaderMenu
        };
    };

    return{
        name: controllerName,
        controller: ['$scope','HeaderMenu', controller]
    };
});