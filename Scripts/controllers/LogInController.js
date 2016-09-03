(function () {
    'use strict';

    function LogInController() {

        var vm = this;
        
        var userName = $('#user-name');
        var userPassword = $('#user-password');
        var button = $('#button');

        button.click(function(){
            console.log(vm.userName.val());
        });


    }


    angular.module('myTripsApp.controllers').controller('LogInController', [LogInController]);
} ());