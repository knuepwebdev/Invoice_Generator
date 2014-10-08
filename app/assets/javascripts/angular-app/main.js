angular.module('nrs')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', 'Address', function($scope, Address) {
    $scope.hospitalState = Address.state;
    $scope.options = ['No', 'Yes'];
    $scope.parts_included = 'No';
    $scope.travel_included = 'No';
    $scope.mileage_included = 'No';
    $scope.parts = [{}];

    $scope.addPart = function() {
      $scope.parts.push({});
    }
    $scope.removePart = function(index) {
      $scope.parts.splice(index, 1);
    }
  }])
  .directive('toggler', [function() {
    function link(scope, element, attrs) {
      function showElement() {
        element.removeClass('hidden');
      }

      function hideElement() {
        element.addClass('hidden');
      }

      scope.$watch(attrs.toggler, function(value) {
        if (value === 'No') {
          hideElement();
        } else {
          showElement();
        }
      });
    }

    return {
      link: link
    };
  }]);
