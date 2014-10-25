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
    $scope.invoice = Invoice;
    $scope.showData = function(key) {
      if ($scope.invoice.data.service_report[key] != undefined) {
        return 'Yes';
      } else {
        return 'No';
      }
    };
    $scope.unitedStates = UnitedStates;
    $scope.save = function(invoice) {
      console.log('save');
      console.log(invoice);
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
    // $scope.calculateTotal = function() {
    //   return $scope.calculateLabor() +
    //          $scope.calculateTravel() +
    //          $scope.calculateMileage() +
    //          $scope.calculateParts() +
    //          $scope.calculateTax();
    // };
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
