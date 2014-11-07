angular.module('invoice')
  .controller('InvoicesCtrl', ['$scope', '$rootScope', 'formData', 'ServiceReport', 'invoiceAttributes', 'UnitedStates', 'ResourceRequester',function($scope, $rootScope, formData, ServiceReport, invoiceAttributes, UnitedStates, ResourceRequester) {
    $scope.options = ['No', 'Yes'];
    $scope.travel_included = 'No';
    $scope.parts_included = 'No';
    $scope.mileage_included = 'No';
    $scope.serviceReport = ServiceReport;
    $scope.allInvoices = ResourceRequester.allInvoices;
    $scope.formData = formData;
    $scope.attrs = invoiceAttributes;

    $scope.showData = function(key) {
      if (ServiceReport.data[key] != undefined) {
        return 'Yes';
      } else {
        return 'No';
      }
    };
    $scope.clearInvoiceData = function() {      
      ServiceReport.data = { 
        parts: [{quantity: '', price: ''}]
      };
    }    
    $scope.formatServiceReport = function(data) {
      ServiceReport.formatData(data);
    }
    $scope.setServiceReport = function(data) {
      ServiceReport.setData(data);
      $rootScope.serviceReport = data;
    };
    $scope.unitedStates = UnitedStates;
    $scope.save = function(serviceReport) {
      $scope.$broadcast('show-errors-check-validity');
      if ($scope.invoiceForm.$invalid) {
        console.log('**FORM IS INVALID***');
        return;  //don't save because form is invalid
      }
      serviceReport.setTotal();
      serviceReport.formatParts();
      ResourceRequester.save(serviceReport);
    };
    $scope.updateInvoice = function() {
      ServiceReport.setTotal();
      ResourceRequester.update(ServiceReport);
    }
    $scope.deleteInvoice = function(serviceReport) {
      ResourceRequester.removeInvoice(serviceReport);
    }
    $scope.addPart = function() {
      if (ServiceReport.data.parts.length < 3) { 
        ServiceReport.data.parts.push({});
      }
    };
    $scope.removePart = function(index) {
      ServiceReport.data.parts.splice(index, 1);
    };
    $scope.updateParts = function() {
      if ($scope.parts_included === 'No') {
        clearParts();
      }
    }
    $scope.clearTravel = function() {
      if ($scope.travel_included === 'No') {
        ServiceReport.data.travel = '';
        ServiceReport.data.travel_rate = '';
      }
    };
    function clearParts() {
      ServiceReport.data.parts = [{quantity: '', price: ''}];
    }
    $scope.clearMileage = function() {
      if ($scope.mileage_included === 'No') {
        ServiceReport.data.mileage = '';
        ServiceReport.data.mileage_rate = ''; 
      }
    }
  }]);
