/*global define */
define([], function() {
    'use strict';

    return function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'partials/intro.html'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
        $routeProvider.when('/signup', {templateUrl: 'partials/signup.html'});
        $routeProvider.otherwise({template: 'under construction'});
    };
});