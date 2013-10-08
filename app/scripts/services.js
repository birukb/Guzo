/*global define*/
define(['angular', 'services/services'], function(angular, services){
    'use strict';
    var serviceModule = angular.module('guzo.services', []);

    services.forEach(function(service){
        serviceModule.factory(service);
    });

    return serviceModule;
});