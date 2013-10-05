/*global define*/
define(['angular', 'directives/directives'], function(angular, directives) {
    'use strict'  ;

    var dir = angular.module('guzo.directives', []);

    directives.forEach(function(directive){
        dir.directive(directive.name, directive.directive);
    });
});