/* global angular */

(function() {
    'use strict';
    
    angular
        .module('app', ['ui.router', 'ngAnimate', 'ngResource'])
        .config(config)
        .run(run)

    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {

        //$urlRouterProvider.when("", "/dashboard");

        $stateProvider.state('start', {
            url: '',
            controller: 'StartController',
            templateUrl: '/partials/start.view.html',
            controllerAs: 'vm',
        });
        
        $stateProvider.state('main', {
            abstract: true,
            controller: 'MainController',
            templateUrl: '/partials/main.layout.html',
            controllerAs: 'vm',
        });
        
        $stateProvider.state('main.about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: '/partials/about.view.html',
            controllerAs: 'vm',
        });
        
        $stateProvider.state('main.patronage', {
            url: '/patronage',
            controller: 'PatronageController',
            templateUrl: '/partials/patronage.view.html',
            controllerAs: 'vm',
        });

    }

    run.$inject = ['$rootScope', '$location', '$http', '$state'];

    function run($rootScope, $location, $http, $state) {

        // TODO keep user logged in after page refresh

        // var globals = $rootScope.globals || {};

        // globals.currentUser = $localStorage.currentUser;
        // globals.theme = $localStorage.theme;

        // $rootScope.globals = globals;

        // if ($rootScope.globals.currentUser) {
        //     $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token; // jshint ignore:line
        // }

        // $rootScope.$on('$stateChangeStart',
        //     function (event, toState, toParams, fromState, fromParams) {
        //         var restrictedPage = !toState.public;
        //         var loggedIn = $rootScope.globals.currentUser;
        //         console.log(toState, fromState);
        //         if (restrictedPage && !loggedIn) {
        //             console.log("Going to login");
        //             event.preventDefault();
        //             $state.go('start.login');
        //         }

        //         // transitionTo() promise will be rejected with 
        //         // a 'transition prevented' error
        //     });
    }

    
})();