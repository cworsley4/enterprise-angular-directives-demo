(function (angular, undefined) {

angular.module('MainApp')
  .directive('apRightNavigation', function () {
    return {
      restrict: 'E',

      templateUrl: '/modules/navigation/right.tpl.html',

      controller: function ($scope) {
        console.log('right nav controller', $scope.showRightPanel);
      },

      link: function () {
        console.log('right nav link');
      }
    };
  });

})(window.angular);