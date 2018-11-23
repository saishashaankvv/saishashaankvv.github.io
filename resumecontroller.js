resumemodule.controller("resumecontroller", function($scope,$http) {
   $http.get('data.json').then(function(response) {
   $scope.resume = response.data;
   $scope.selectedresume = null;
$scope.isNull = function (thing) {
    return (thing === null);
}
  });

});