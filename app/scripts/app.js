/*global define */
define(['angular', 'routes', 'controllers', 'directives', 'angularRoute'], function (angular, routes) {
    'use strict';

    var app = angular.module('guzo', [
        'ngRoute',
        'guzo.controllers',
        'guzo.directives'
    ]);

    app.config(['$routeProvider', routes]);
    return app;
});