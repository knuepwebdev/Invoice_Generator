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
    $scope.parts = [
      {partNumber: '', partName: ''}
    ];

    $scope.addPart = function() {
      $scope.parts.push({});
    }
    $scope.removePart = function(index) {
      $scope.parts.splice(index, 1);
    }
  }])
  .directive('toggleParts', [function() {
    function link(scope, element, attrs) {
      function showElement() {
        // Dynamically set name attribute on textfield
        element.removeClass('hidden');
      }

      function hideElement() {
        element.addClass('hidden');
      }

      scope.$watch(attrs.toggleParts, function(value) {
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
