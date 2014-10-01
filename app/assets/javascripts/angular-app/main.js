angular.module('nrs')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', function($scope, Address) {
    $scope.hospitalState = Address.state;
  });

