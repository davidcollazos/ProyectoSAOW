angular.module('formAdictos', [])
  .controller('TNTUserController', ['$scope', function($scope) {
    $scope.user = {};
 
 
    $scope.update = function() {
      console.log(angular.fromJson($scope.user));
    };
 
 
    $scope.reset = function(form) {
      $scope.user = {};
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
    };
 
 
    $scope.reset();
  }]);