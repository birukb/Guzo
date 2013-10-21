/*global define*/

define(['angular','signup/signupCtrl'], function (angular, signupCtrl){
    'use strict';

    var signup = angular.module('signup', []);


    signup.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/signup', {
            templateUrl: 'scripts/signup/signup.html',
            controller: signupCtrl
        });
    }]);

    return signup;
});