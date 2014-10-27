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
      console.log('calculateTax');
      console.log('data.service_report.parts...');
      console.log(data.service_report.parts);
      var tax = 0;
      angular.forEach(data.service_report.parts, function(part, index) {
        console.log('in forEach');
        tax += (part.quantity * part.price * data.service_report.sales_tax * 0.01);
      });
      console.log('returning ' + (isNaN(tax) ? 0 : tax));
      return (isNaN(tax) ? 0 : tax);
    };    
    function hasParts() {
      if (data.service_report.parts[0].hasOwnProperty('name')) {
        return 'Yes';
      } else {
        return 'No';
      }
    }

    var Invoice = {
      setServiceReport: setServiceReport,
      data: data,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage,
      calculateTax: calculateTax, 
      hasParts: hasParts
    };

    console.log('returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
