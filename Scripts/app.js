(function () {
    'use strict';

    var config = function config($routeProvider, $locationProvider) {
        var CONTROLLER_VIEW_MODEL_NAME = 'vm';

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home-page-view.html',
                controller: 'HomePageController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/log-in', {
                templateUrl: 'templates/log-in.html',
                controller: 'LogInController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/statistic', {
                templateUrl: 'templates/statistic-view.html',
                controller: 'StatisticsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/forecasts', {
                templateUrl: 'templates/forecasts-view.html',
                controller: 'ForecastsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/history', {
                templateUrl: 'templates/abouth-view.html',
                controller: 'AbouthController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/admin', {
                templateUrl: 'templates/admin.html',
                controller: 'AdminController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .otherwise({redirectTo: '/'});
    }

    angular.module('myTripsApp.controllers', []);

    angular.module('myTripsApp', ['ngRoute', 'myTripsApp.controllers'])
        .config(['$routeProvider', '$locationProvider', config]);


}());