"use strict";

angular.module('app', [])

    .controller('Ctrl', function($scope) {
        $scope.maps = [
            { center: {lat: 47.211, lng: -1.566}, zoom: 12 },
            { center: {lat: 37.423, lng: -122.086}, zoom: 9 }
        ];
    })

    .directive('gmaps', function factory() {
        return {
            restrict: 'A',
            scope: false,
            link: function postLink(scope, element, attrs) {

                // TODO

            }
        };
    });
