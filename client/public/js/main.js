angular.module('myApp', [])
  .controller('myControl', ['$scope', '$http', ($scope, $http) => {
    $scope.myFunc = (lang) => {
      $http({
        url: '/test1',
        method: 'POST',
        data: {lang: lang}
      });
    };
}]);

