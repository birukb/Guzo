/*global define*/

define(['angular','header/headerDirective','header/navSvc'], function (angular, headerDirective, navSvc){
    'use strict';

    var header = angular.module('header', []);

    header.directive(headerDirective);
    header.factory(navSvc);

    return header;
});