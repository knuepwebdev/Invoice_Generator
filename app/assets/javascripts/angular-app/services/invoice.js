angular.module('invoice')
  .factory('Invoice', ['Restangular', function(Restangular) {
    var Invoice = {
      all: Restangular.all('invoices').getList,
      save: function(invoice) {
        Restangular.all('invoices').post(invoice)
      }
    };
    
    return Invoice;
  }]);
