var app = angular.module('RL', []);
app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});
app.controller('RLController', ['$anchorScroll', '$location', '$timeout', '$window', '$scope',
    function($anchorScroll, $location, $timeout, $window, $scope) {
        var totalImages = 0;
        var loadedImages = 0;
        $scope.imageLoaded = function() {
            loadedImages += 1;
            if (loadedImages == totalImages) {
                $anchorScroll($location.url().substring(1));
            }
        };
        var onDataAvailable = function(response) {
            $scope.figures = response;
            $scope.figures.forEach(function(figure) {
                totalImages += figure.imageNames.length
            });
        };
        $.ajax({
            url: 'data/data.json',
            async: false,
            dataType: 'json',
            success: onDataAvailable
        });
}]);