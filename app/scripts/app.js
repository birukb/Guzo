/*global define */
define(['angular',
    'routes',
    'controllers',
    'directives',
    'services',
    'angularRoute'
], function (angular, routes) {
    'use strict';

    var app = angular.module('guzo', [
        'ngRoute',
        'guzo.controllers',
        'guzo.directives',
        'guzo.services'
    ]);

    app.config(['$routeProvider', routes]);
    return app;
});