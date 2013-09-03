require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            exports: 'angular'
        },
        angularRoute: ['angular']
    }
});

require(['jquery', 'angular', 'app', 'bootstrap'], function($, angular, app){
    'use strict';
    var $body = $('body').attr('ng-app', app.name);
    $body.find('header').append('<guzoheader></guzoheader>');
    $body.find('.main-content').append('<ng-view></ng-view>');
    angular.bootstrap($body, [app.name]);
});