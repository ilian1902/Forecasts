/**
 * Created by Ilian on 30/04/2016.
 */
(function (){
    'use strict';

    function ForecastsController(){

        // da slaga elementite ot admin panela v prognozite
        var $image = $('.admin-img'),
        $host = $('.host').val(),
        $guest = $('.guest'),
        $submit = $('.submit');

        function postElementInForestPage(){
            var ulLists = $('#lists');

            var listItem = $('<li>', {
            class: "list-item"
            }).appendTo('#lists');

            var imageHost = $('<image>', {
            class: "forecast-img"
            }).appendTo(listItem);

            var hostPost = $('<strong>').appendTo(imageHost);

            var imageGuest = $('<image>', {
            class: "forecast-img"
            }).appendTo(listItem);

            var guestPost = $('<strong>').attr('ng-init', 'postElementInForestPage()').appendTo(imageGuest).text($guest).html();
            
            ulLists.append($host);
        
        }
    }
    angular.module('myTripsApp.controllers').controller('ForecastsController', [ForecastsController]);
}());