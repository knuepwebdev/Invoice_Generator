angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', '$location', function(Restangular, $location) {
    var ResourceRequester = {
      all: Restangular.all('invoices').getList,
      save: function(invoice) {
        Restangular.all('invoices').post(invoice).then(function(newInvoice) {
          $location.path("/invoices/" + newInvoice.id);
        });
      }
    };
    
    return ResourceRequester;
  }]);
