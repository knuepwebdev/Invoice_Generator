angular.module('invoice')
  .factory('Invoice', ['Restangular', function(Restangular) {
    var baseInvoices = Restangular.all('invoices');
    baseInvoices.getList().then(function(invoices) {
      $scope.allInvoices = invoices;
      console.log(allInvoices);
    });
  }]);
