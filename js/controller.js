var app = angular.module('RL', []);
app.controller('RLController', ['$anchorScroll', '$location', '$scope',
    function($anchorScroll, $location, $scope) {
    var onDataAvailable = function(response) {
        $scope.figures = response
        $anchorScroll($location.hash())
    };
    $.ajax({
        url: 'data/data.json',
        async: false,
        dataType: 'json',
        success: onDataAvailable
    })
}]);