angular.module('invoice')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', '$rootScope', 'formData', 'Invoice', 'invoiceAttributes', 'UnitedStates', 'Address', 'ResourceRequester',function($scope, $rootScope, formData, Invoice, invoiceAttributes, UnitedStates, Address, ResourceRequester) {
    $scope.hospitalState = Address.state;
    $scope.options = ['No', 'Yes'];
    $scope.travel_included = 'No';
    $scope.parts_included = 'No';
    $scope.mileage_included = 'No';
    $scope.invoice = Invoice;
    $scope.allInvoices = ResourceRequester.allInvoices;
    $scope.formData = formData;
    $scope.attrs = invoiceAttributes;
    $scope.spacerize = function(attr) {
      capitalized = [];
      attr.split('_').forEach(function(word, index, words) {
        capitalized_word = word.charAt(0).toUpperCase() + word.slice(1);
        capitalized.push(capitalized_word);
      });
      return capitalized.join(' ');
    };

    $scope.showData = function(key) {
      if ($scope.serviceReport[key] != undefined) {
        return 'Yes';
      } else {
        return 'No';
      }
    };
    $scope.clearInvoiceData = function() {
      Invoice.data = { 
        serviceReport: {
          parts: [{quantity: '', price: ''}]
        }
      };
    }    
    $scope.setServiceReport = function(serviceReport) {
      Invoice.setData(serviceReport);
      $rootScope.serviceReport = serviceReport;
    };
    $scope.unitedStates = UnitedStates;
    
    $scope.save = function(invoice) {
      $scope.$broadcast('show-errors-check-validity');
      if ($scope.invoiceForm.$invalid) {
        console.log('**FORM IS INVALID***');
        return;  //don't save because form is invalid
      }
      invoice.setTotal();
      ResourceRequester.save(invoice);
    };
    $scope.deleteInvoice = function(serviceReport) {
      ResourceRequester.removeInvoice(serviceReport);
    }

    $scope.addPart = function() {
      if ($scope.invoice.data.serviceReport.parts.length < 3) { 
        $scope.invoice.data.serviceReport.parts.push({});
      }
    };
    $scope.removePart = function(index) {
      $scope.invoice.data.serviceReport.parts.splice(index, 1);
    };
    $scope.updateParts = function() {
      if ($scope.parts_included === 'No') {
        clearParts();
      }
    }
    $scope.clearTravel = function() {
      if ($scope.travel_included === 'No') {
        $scope.travel = 0;
      }
    };
    function clearParts() {
      $scope.parts = [{quantity: '', price: ''}];
    }
    $scope.clearMileage = function() {
      if ($scope.mileage_included === 'No') {
        $scope.mileage = 0; 
      }
    }
  }]);
