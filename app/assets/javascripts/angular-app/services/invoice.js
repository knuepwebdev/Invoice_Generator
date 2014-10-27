angular.module('invoice')
  .factory('Invoice', function() {    
    var data = { parts: [{quantity: '', price: ''}] }
    
    function setServiceReport(serviceReport) {
      data = {};
      data.service_report = serviceReport;
    }

    function calculateLabor() {
      return (isNaN(data.service_report.labor * data.service_report.labor_rate) ? 0 : data.service_report.labor * data.service_report.labor_rate);
    };

    function calculateTravel() {
      return (isNaN(data.service_report.travel * data.service_report.travel_rate) ? 0 : data.service_report.travel * data.service_report.travel_rate);
    };
    function calculateMileage() {
      return (isNaN(data.service_report.mileage * data.service_report.mileage_rate) ? 0 : data.service_report.mileage * data.service_report.mileage_rate);
    };
    function calculateTax() {
      var tax = 0;
      angular.forEach(data.service_report.parts, function(part, index) {
        tax += (part.quantity * part.price * data.service_report.sales_tax * 0.01);
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
      angular.forEach(data.service_report.parts, function(part, index) {
        sum += (part.quantity * part.price);
      });
      return (isNaN(sum) ? 0 : sum); 
    };            
    function hasParts() {
      if (data.service_report.parts[0].name === null) {
        return 'No';
      } else {
        return 'Yes';
      }
    }

    var Invoice = {
      setServiceReport: setServiceReport,
      data: data,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage,
      calculateTax: calculateTax,
      calculateTotal: calculateTotal,
      hasParts: hasParts
    };

    return Invoice;
  }); 
