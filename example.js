var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!",
    ];
});
