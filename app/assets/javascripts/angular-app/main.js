angular.module('nrs')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', 'Address', function($scope, Address) {
    $scope.hospitalState = Address.state;
    $scope.options = ['No', 'Yes'];
  }]);
