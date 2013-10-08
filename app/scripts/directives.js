/*global define*/
define(['angular', 'directives/directives'], function(angular, directives) {
    'use strict'  ;

    var directiveModule = angular.module('guzo.directives', []);

    directives.forEach(function(directive){
        directiveModule.directive(directive);
    });

    return directiveModule;
});