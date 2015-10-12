/**
 * Created by yuhwan on 2015. 10. 11..
 */
angular.module('StarterApp', ['starter.controllers', 'starter.services', 'ngMaterial', 'ngRoute', 'ngAnimate'])

.config(function($routeProvider) {

    $routeProvider

        // Collection Page
        .when('/', {
            templateUrl: '../templates/home.html',
            controller: 'homeController'
        });


});

