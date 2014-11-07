angular.module('invoice')
  .factory('ResourceRequester', ['Restangular', '$rootScope', 'ServiceReport', '$location', function(Restangular, $rootScope, ServiceReport, $location) {
  
    function allInvoices() {
      Restangular.all('invoices').getList().then(function(serviceReports) {
        ServiceReport.data.serviceReports = serviceReports;
        $rootScope.serviceReports = ServiceReport.data.serviceReports;
        $location.path('/invoices');
      });
    }

    function save(s_report) {
      Restangular.all('invoices').post(s_report.data).then(function(serviceReport) {
        ServiceReport.setData(serviceReport);
        $location.path("/invoices/" + serviceReport.id);
      });
    }

    function removeInvoice(serviceReport) {
      serviceReport.remove().then(function() {
        $rootScope.serviceReports = _.without($rootScope.serviceReports, serviceReport);
        $location.path('/invoices');    
      });
    }
    function update(s_report) {
      s_report.data.put().then(function(serviceReport) {
        ServiceReport.setData(serviceReport);
        $location.path("/invoices/" + serviceReport.id);
      });
    }

    var ResourceRequester = {
      allInvoices: allInvoices,
      save: save,
      removeInvoice: removeInvoice,
      update: update
    };
    
    return ResourceRequester;
  }]);
