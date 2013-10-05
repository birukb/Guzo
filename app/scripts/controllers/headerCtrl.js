/*global define*/
define([], function(){
    'use strict';

    var controllerName = 'headerCtrl',
        controller,
        siteMap;

    siteMap = [{
        url: 'login',
        name: 'Login'
    },
    {
        url: 'signup',
        name: 'Sign up'
    },
    {
        url: 'about',
        name: 'About'
    },
    {
        url: 'contact',
        name: 'Contact'
    }];

    controller = function($scope, $rootScope, $location){
        var displayed;
        $scope.nav = {
            maps: siteMap
        };

        $scope.collapseNav = function(){
            // hack; bootstrap hide has bug that it shows when told to hide
            var $nav = $('.nav-collapse');
            if($nav.height() > 0){
                $nav.collapse('hide');
            }
        };

        $rootScope.$on('$routeChangeStart', function (){
            changeLocation(getCurrentLocation());
        });

        function getCurrentLocation(){
            // url has a leading '/'
            var url = $location.url().substr(1);
            var currentLocation = siteMap.filter(function(map){
                return map.url === url;
            });

            return currentLocation[0];
        }

        function changeLocation(map){
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

            $scope.collapseNav();
        }

        // taking care of bookmarked pages
        changeLocation(getCurrentLocation());
    };

    return{
        name: controllerName,
        controller: ['$scope', '$rootScope', '$location', controller]
    };
});