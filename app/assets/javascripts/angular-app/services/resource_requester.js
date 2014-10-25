angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', 'Invoice', '$location', function(Restangular, Invoice, $location) {
    var ResourceRequester = {
      all: Restangular.all('invoices').getList,
      save: function(invoice) {
        Restangular.all('invoices').post(invoice).then(function(serviceReport) {
          console.log('****newInvoice****');
          console.log(serviceReport);
          console.log('END newInvoice****');
          Invoice.setServiceReport(serviceReport);
          $location.path("/invoices/" + serviceReport.invoice.id);
        });
      }
    };
    
    return ResourceRequester;
  }]);
