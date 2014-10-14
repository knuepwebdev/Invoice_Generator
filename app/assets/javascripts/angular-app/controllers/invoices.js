angular.module('invoice')
  .factory('Address', function() {
    return {
      state: 'CA'
    };
  })
  .controller('InvoicesCtrl', ['$scope', 'formData', 'Invoice', 'invoiceAttributes', 'Address', 'ResourceRequester',function($scope, formData, Invoice, invoiceAttributes, Address, ResourceRequester) {
    $scope.hospitalState = Address.state;
    $scope.options = ['No', 'Yes'];
    $scope.parts_included = 'No';
    $scope.travel_included = 'No';
    $scope.mileage_included = 'No';
    $scope.parts = [{quantity: '', price: ''}];
    $scope.formData = formData;
    $scope.attrs = invoiceAttributes;
    $scope.invoice = Invoice;
    $scope.getData = function(key, value, path) {
      console.log('$scope.getData');
      Invoice.setProperty(key, value, path);
      console.log('end $scope.getData');
    };

    $scope.save = function(invoice) {
      console.log('save');
      console.log(invoice);
      ResourceRequester.save(invoice);
    };

    $scope.addPart = function() {
      $scope.parts.push({});
    };
    $scope.removePart = function(index) {
      $scope.parts.splice(index, 1);
    };
    $scope.calculateLabor = function() {
      return (isNaN($scope.labor * $scope.laborHourlyRate) ? 0 : $scope.labor * $scope.laborHourlyRate);
    };
    $scope.calculateTravel = function() {
      return (isNaN($scope.travel * $scope.travelHourlyRate) ? 0 : $scope.travel * $scope.travelHourlyRate);
    };
    $scope.calculateMileage = function() {
      return (isNaN($scope.mileage * $scope.mileageRate) ? 0 : $scope.mileage * $scope.mileageRate);
    };
    $scope.calculateParts = function() {
      var sum = 0;
      angular.forEach($scope.parts, function(part, index) {
        sum += (part.quantity * part.price);
      });
      return (isNaN(sum) ? 0 : sum); 
    };
    $scope.calculateTax = function() {
      var tax = 0;
      angular.forEach($scope.parts, function(part, index) {
        tax += (part.quantity * part.price * $scope.taxRate * 0.01);
      });
      return (isNaN(tax) ? 0 : tax);
    };
    $scope.calculateTotal = function() {
      return $scope.calculateLabor() +
             $scope.calculateTravel() +
             $scope.calculateMileage() +
             $scope.calculateParts() +
             $scope.calculateTax();
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
