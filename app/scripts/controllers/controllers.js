/*global define*/

define(['controllers/headerCtrl',
    'controllers/signupCtrl'], function(headerCtrl,
        signupCtrl){
    'use strict';

    return [
        headerCtrl,
        signupCtrl
    ];
});