
var app = angular.module('MyApp', ['bootsmooth']);

app.controller('DefaultController', ['$scope', function($scope) {
    $scope.menuShown = false;
    
    $scope.showMenu = function() {
      $scope.menuShown = !$scope.menuShown;
  };
}]);