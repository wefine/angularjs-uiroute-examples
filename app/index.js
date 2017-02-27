import "angular-ui-router";
import angular from "angular";

angular.module("uiApp", ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'hello',
                url: '/hello',
                template: '<h3>hello world!</h3>'
            })
            .state({
                name: 'about',
                url: '/about',
                template: '<h3>Its the UI-Router hello world app!</h3>'
            });
    });