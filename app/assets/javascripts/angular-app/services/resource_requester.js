angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', function(Restangular) {
    var ResourceRequester = {
      all: Restangular.all('invoices').getList,
      save: function(invoice) {
        Restangular.all('invoices').post(invoice)
      }
    };
    
    return ResourceRequester;
  }]);
