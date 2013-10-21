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
                    var el = element.find('.nav-collapse');
                    if(el.height() > 0){
                        // need to check for height b/c if already collapsed it will expand when you call collapse
                        el.collapse('hide');
                    }
                });
            }
        };
    };

    directive.$inject = ['$rootScope', '$location', 'HeaderMenu'];

    return{
        guzoheader: directive
    };
});