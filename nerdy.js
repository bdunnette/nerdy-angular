var app = angular.module('NerdyApp', ['ngResource', 'ngMaterial']);

app.controller('MainCtrl', function($scope) {
    $scope.content = "Foo!"
});

app.controller('BoardCtrl', function($scope, $resource) {
    $scope.board = [];
    var Board = $resource('./data/board.json', {
            id: '@id'
        }, {
            query: {
                isArray: true
            }
        }),
        board = Board.query(function() {
            $scope.board = board;
        });
});
