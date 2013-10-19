/*global define*/
define([], function(){
    'use strict';

    var controller = function($scope){
        $scope.input = {
            fields: [
                {id: 'fName', key: 'name.first', type: 'text', label: 'First Name', autofocus: 'autofocus'},
                {id: 'mName', key: 'name.middle', type: 'text', label: 'Middle Name'},
                {id: 'lName', key: 'name.last', type: 'text', label: 'Last Name'},
                {id: 'phone', key: 'phone', type: 'text', label: 'Phone '},
                {id: 'email', key: 'email', type: 'text', label: 'Email'},
                {id: 'password', key: 'password', type: 'password', label: 'Password'},
                {id: 'confirmP', key: 'confirm', type: 'password', label: 'Confirm password'}
            ]
        };
    };

    controller.$inject = ['$scope'];

    return{
        signupCtrl: controller
    };
});