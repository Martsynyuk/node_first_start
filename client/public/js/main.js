angular.module('myApp', [])
  .controller('myControl', ['$scope', '$http', ($scope, $http) => {
    $scope.langs = [
      'en',
      'es',
      'sr'
    ];

    $scope.myFunc = (lang) => {
      $http({
        url: '/test1',
        method: 'POST',
        data: {lang: lang}
      }).then(
        location.reload()
      ).catch(
        (error) => {

      });
    };
}]);

