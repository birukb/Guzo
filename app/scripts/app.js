/*global define */
define(['angular',
    'routes',
    'signin/signin',
    'signup/signup',
    'header/header',
    'angularRoute'
], function (angular, routes) {
    'use strict';

    var app = angular.module('guzo', [
        'ngRoute',
        'header',
        'signin',
        'signup'
    ]);

    app.config(['$routeProvider', routes]);
    return app;
});