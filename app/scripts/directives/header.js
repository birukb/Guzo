/*global define*/

define([], function (){
    'use strict';
    var directiveName = 'guzoheader',
        directive;

    directive = function () {
        return {
            restrict: 'E',
            templateUrl:'partials/header.html',
            replace: true
        };
    };

    return{
        name: directiveName,
        directive: directive
    };
});