angular.module('invoice')
  .factory('Invoice', function() {    
    var data = { 
      serviceReport: {
        parts: [{quantity: '', price: ''}]
      }
    };
    function setData(newData) {
      Invoice.data = {};
      Invoice.data.serviceReport = newData;
    }
    function setTotal() {
      Invoice.data.total = calculateTotal();
    }

    function calculateLabor() {
      return (isNaN(Invoice.data.serviceReport.labor * Invoice.data.serviceReport.labor_rate) ? 0 : Invoice.data.serviceReport.labor * Invoice.data.serviceReport.labor_rate);
    };

    function calculateTravel() {
      return (isNaN(Invoice.data.serviceReport.travel * Invoice.data.serviceReport.travel_rate) ? 0 : Invoice.data.serviceReport.travel * Invoice.data.serviceReport.travel_rate);
    };
    function calculateMileage() {
      return (isNaN(Invoice.data.serviceReport.mileage * Invoice.data.serviceReport.mileage_rate) ? 0 : Invoice.data.serviceReport.mileage * Invoice.data.serviceReport.mileage_rate);
    };
    function calculateTax() {
      var tax = 0;
      angular.forEach(Invoice.data.serviceReport.parts, function(part, index) {
        tax += (part.quantity * part.price * Invoice.data.serviceReport.sales_tax * 0.01);
      });
      return (isNaN(tax) ? 0 : tax);
    };
    function calculateTotal() {
      return calculateLabor() +
             calculateTravel() +
             calculateMileage() +
             calculateParts() +
             calculateTax();
    };
    function calculateParts() {
      var sum = 0;
      angular.forEach(Invoice.data.serviceReport.parts, function(part, index) {
        sum += (part.quantity * part.price);
      });
      return (isNaN(sum) ? 0 : sum); 
    };            
    function hasParts() {
      if (Invoice.data.serviceReport.parts[0].name === null) {
        return 'No';
      } else {
        return 'Yes';
      }
    }

    var Invoice = {
      data: data,
      setData: setData,
      setTotal: setTotal,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage,
      calculateTax: calculateTax,
      calculateTotal: calculateTotal,
      hasParts: hasParts
    };

    return Invoice;
  }); 
