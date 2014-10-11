angular.module('invoice')
  .factory('Invoice', ['Restangular', function(Restangular) {
    console.log('****INvoice factory***');
    var Invoice = {
      all: Restangular.all('invoices').getList
    };
    
    return Invoice;
  }]);
