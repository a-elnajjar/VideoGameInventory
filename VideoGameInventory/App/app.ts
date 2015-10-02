module app
{
    'use strict';
    var main = angular.module('app', [
        'ngRoute'
    ]);

    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider: ng.route.IRouteProvider): void
    {
        $routeProvider
            .when('/insertGame',
            {
                templateUrl: '/app/insertGame/insertGameView.html',
                controller: 'InsertGameController as vm'
            })
            .otherwise('/insertGame');
    }
}