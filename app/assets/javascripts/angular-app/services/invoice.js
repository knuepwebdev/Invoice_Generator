angular.module('invoice')
  .factory('Invoice', function() {    
    var data = { parts: [{quantity: '', price: ''}] }
    function setData(newData) {
      data = {};
      data.serviceReport = newData;
    }

    function calculateLabor() {
      return (isNaN(data.serviceReport.labor * data.serviceReport.labor_rate) ? 0 : data.serviceReport.labor * data.serviceReport.labor_rate);
    };

    function calculateTravel() {
      return (isNaN(data.serviceReport.travel * data.serviceReport.travel_rate) ? 0 : data.serviceReport.travel * data.serviceReport.travel_rate);
    };
    function calculateMileage() {
      return (isNaN(data.serviceReport.mileage * data.serviceReport.mileage_rate) ? 0 : data.serviceReport.mileage * data.serviceReport.mileage_rate);
    };
    function calculateTax() {
      var tax = 0;
      angular.forEach(data.serviceReport.parts, function(part, index) {
        tax += (part.quantity * part.price * data.serviceReport.sales_tax * 0.01);
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
      angular.forEach(data.serviceReport.parts, function(part, index) {
        sum += (part.quantity * part.price);
      });
      return (isNaN(sum) ? 0 : sum); 
    };            
    function hasParts() {
      if (data.serviceReport.parts[0].name === null) {
        return 'No';
      } else {
        return 'Yes';
      }
    }

    var Invoice = {
      data: data,
      setData: setData,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage,
      calculateTax: calculateTax,
      calculateTotal: calculateTotal,
      hasParts: hasParts
    };

    return Invoice;
  }); 
