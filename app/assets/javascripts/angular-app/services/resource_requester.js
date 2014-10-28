angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', '$rootScope', 'Invoice', '$location', function(Restangular, $rootScope, Invoice, $location) {
  
    function allInvoices() {
      Restangular.all('invoices').getList().then(function(serviceReports) {
        $rootScope.serviceReports = serviceReports;
        $location.path('/invoices');
      });
    }

    function save(invoice) {
      Restangular.all('invoices').post(invoice).then(function(serviceReport) {
        $rootScope.serviceReport = serviceReport;
        Invoice.setData(serviceReport);
        $location.path("/invoices/" + serviceReport.id);
      });
    }

    var ResourceRequester = {
      allInvoices: allInvoices,
      save: save
    };
    
    return ResourceRequester;
  }]);
