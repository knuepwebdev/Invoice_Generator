angular.module('nrs')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', 'Address', function($scope, Address) {
    $scope.hospitalState = Address.state;
    $scope.options = ['No', 'Yes'];
    $scope.selectedOption = 'No';
  }])
  .directive('toggleParts', [function() {
    function link(scope, element, attrs) {
      scope.$watch(attrs.toggleParts, function(value) {
        if (value === 'No') {
          console.log(value);
        } else {
          console.log(value);
        }
      });
    }

    return {
      link: link
    };
  }]);
