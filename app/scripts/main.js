(function(require){
    'use strict';
    require.config({
        paths: {
            jquery: '../bower_components/jquery/jquery',
            angular: '../bower_components/angular/angular',
            angularRoute: '../bower_components/angular-route/angular-route',
            bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
        },
        shim: {
            bootstrap: {
                deps: ['jquery'],
                exports: 'bootstrap'
            },
            angular: {
                exports: 'angular'
            },
            angularRoute: ['angular']
        }
    });

    require(['jquery', 'angular', 'app', 'bootstrap'], function($, angular, app){
        $('body').attr('ng-app', app.name);
        angular.bootstrap(document, [app.name]);
    });
}(require));