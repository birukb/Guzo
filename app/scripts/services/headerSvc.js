/*global define*/
define([], function(){
    'use strict';

    var anonHeaderMenu = [{
        url: 'login',
        label: 'Login'
    },
    {
        url: 'signup',
        label: 'Sign Up'
    },
    {
        url: 'about',
        label: 'About'
    },
    {
        url: 'contact',
        label: 'Contact'
    }];

    var service = function(){
        return{
            anonHeaderMenu: anonHeaderMenu
        };
    };

    return {
        name: 'HeaderMenu',
        service: service
    };
});