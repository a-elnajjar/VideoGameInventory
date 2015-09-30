var app;
(function (app) {
    'use strict';
    var main = angular.module('app', [
        'ngRoute'
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider.when('/insertGame', {
            templateUrl: '/app/insertGame/insertGameView.html',
            controller: 'InsertGameController as vm'
        }).otherwise('/insertGame');
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map