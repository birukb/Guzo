/*global define*/

define([], function (){
    'use strict';
    var directive = function(){
        return {
            link: function(scope){
                scope.label = {
                    legend : 'Please sign in',
                    userName : 'Email address',
                    password : 'Password',
                    signInBttn : 'Sign in'
                };
            }
        };
    };

    return {guzoLogin: directive};
});