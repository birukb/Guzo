/*global define */
define([], function() {
    'use strict';

    return function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'partials/intro.html'});
        $routeProvider.otherwise({template: 'under construction'});
    };
});