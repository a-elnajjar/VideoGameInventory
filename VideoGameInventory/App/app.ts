module app {
    'use strict';
    var main = angular.module('app', [
        'ngRoute'
    ]);

    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {

        $routeProvider
            .when("/insertGameView",
            {
                templateUrl: "/app/insertGame/insertGameView.html",
                controller: "insertGameController as vm"
            })
            .otherwise("/insertGameView");
    }
}