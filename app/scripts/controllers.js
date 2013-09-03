/*global define*/
define(['angular', 'controllers/controllers'], function(angular, controllers) {
    'use strict';

    var ctrl = angular.module('guzo.controllers', []);

    controllers.forEach(function(controller){
        ctrl.controller(controller.name, controller.controller);
    });
    
    return ctrl;
});