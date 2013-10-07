/*global define*/

define([], function (){
    'use strict';
    var directiveName = 'guzoheader',
        directive;

    directive = function ($rootScope, $location) {
        return {
            restrict: 'E',
            templateUrl:'partials/header.html',
            replace: true,
            link: function(scope, element){
                var displayed;

                $rootScope.$on('$routeChangeStart', function (){
                    highlightCurrentLocation();
                });

                function highlightCurrentLocation(){
                    function getCurrentLocation(){
                        var i,
                            len = scope.nav.maps.length,
                            url = $location.url().substr(1);  // url has a leading '/'

                        for(i = 0; i< len; i++){
                            if(scope.nav.maps[i].url === url){
                                return scope.nav.maps[i];
                            }
                        }
                    }

                    function collapseNav (){
                        // hack; bootstrap hide has bug that it shows when told to hide
                        var $nav = element.find('.nav-collapse');
                        if($nav.height() > 0){
                            $nav.collapse('hide');
                        }
                    }

                    var map = getCurrentLocation();
                    if(displayed){
                        displayed.class = null;
                    }

                    if(map){
                        map.class = 'active';
                        displayed = map;
                    }
                    else{
                        displayed = null;
                    }

                    collapseNav();
                }

                // taking care of bookmarked pages
                highlightCurrentLocation();
            }
        };
    };

    return{
        name: directiveName,
        directive: ['$rootScope', '$location', directive]
    };
});