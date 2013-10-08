/*global define*/
define([], function(){
    'use strict';

    var controller = function($scope, HeaderMenu){
        $scope.nav = {
            maps: HeaderMenu.anonHeaderMenu
        };
    };

    return{
        headerCtrl: ['$scope','HeaderMenu', controller]
    };
});