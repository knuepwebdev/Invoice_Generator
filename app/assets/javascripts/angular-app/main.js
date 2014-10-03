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
    // $scope.numberOfParts = 0;
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
