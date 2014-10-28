angular.module('invoice')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', 'formData', 'Invoice', 'invoiceAttributes', 'UnitedStates', 'Address', 'ResourceRequester',function($scope, formData, Invoice, invoiceAttributes, UnitedStates, Address, ResourceRequester) {
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
    $scope.unitedStates = UnitedStates;
    
    $scope.save = function(invoice) {
      $scope.$broadcast('show-errors-check-validity');
      if ($scope.invoiceForm.$invalid) {
        console.log('**FORM IS INVALID***');
        return;  //don't save because form is invalid
      }
      ResourceRequester.save(invoice);
    };

    $scope.addPart = function() {
      if ($scope.invoice.data.parts.length < 3) { 
        $scope.invoice.data.parts.push({});
      }
    };
    $scope.removePart = function(index) {
      $scope.invoice.data.parts.splice(index, 1);
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
  }])
  .directive('toggler', [function() {
    function link(scope, element, attrs) {
      function showElement() {
        element.removeClass('hidden');
      }

      function hideElement() {
        element.addClass('hidden');
      }

      scope.$watch(attrs.toggler, function(value) {
        if (value === 'No') {
          hideElement();
        } else {
          showElement();
        }
      });
    }

    return {
      link: link
    };
  }]);
