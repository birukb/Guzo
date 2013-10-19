/*global define*/

define([], function (){
    'use strict';
    var directive = function ($rootScope, $location, HeaderMenu) {
        return {
            restrict: 'E',
            templateUrl:'partials/header.html',
            replace: true,
            link: function(scope, element){
                scope.nav = {
                    maps: HeaderMenu.anonHeaderMenu
                };

                scope.app = {
                    title: 'Guzo'
                };

                scope.isActive = function(page){
                    return page === $location.path().substr(1);  // url has a leading '/'
                };

                $rootScope.$on('$routeChangeStart', function (){
                    element.find('.nav-collapse').collapse('hide');
                });
            }
        };
    };

    directive.$inject = ['$rootScope', '$location', 'HeaderMenu'];

    return{
        guzoheader: directive
    };
});