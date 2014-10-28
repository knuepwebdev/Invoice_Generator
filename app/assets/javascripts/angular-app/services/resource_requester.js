angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', '$rootScope', 'Invoice', '$location', function(Restangular, $rootScope, Invoice, $location) {
  
    function allInvoices() {
      Restangular.all('invoices').getList().then(function(serviceReports) {
        $rootScope.serviceReports = serviceReports;
        $location.path('/invoices');
      });
    }

    var ResourceRequester = {
      allInvoices: allInvoices,
      save: function(invoice) {
        Restangular.all('invoices').post(invoice).then(function(serviceReport) {
          Invoice.setServiceReport(serviceReport);
          $location.path("/invoices/" + serviceReport.invoice.id);
        });
      }
    };
    
    return ResourceRequester;
  }]);
