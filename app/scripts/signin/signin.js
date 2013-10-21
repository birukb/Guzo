/*global define*/

define(['angular','signin/signinDirective'], function (angular, signinDirective){
    'use strict';

    var signin = angular.module('signin', []);

    signin.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl: 'scripts/signin/signin.html'
        });
    }]);

    signin.directive(signinDirective);

    return signin;
});