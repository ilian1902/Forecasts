(function (){
    'use strict';

    function LogInController(){
        var userName = $('user-name');
        var userPassword = $('user-password');
        var button = $('button');

        button.on('çlick', clickLogIn, false);

    }

    function clickLogIn(ev){
        console.log(userName);
        console.log(userPassword);

    }

    angular.module('myTripsApp.controllers').controller('LogInController', [LogInController]);
}());