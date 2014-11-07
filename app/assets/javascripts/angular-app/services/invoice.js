angular.module('invoice')
  .factory('ServiceReport', function() {    
    var data = { 
      parts: [{quantity: '', price: ''}]
    };
    function setData(newData) {
      ServiceReport.data = {};
      ServiceReport.data = newData;
    }
    function setTotal() {
      ServiceReport.data.invoice_attributes.total = calculateTotal();
    }

    function calculateLabor() {
      return (isNaN(ServiceReport.data.labor * ServiceReport.data.labor_rate) ? 0 : ServiceReport.data.labor * ServiceReport.data.labor_rate);
    };

    function calculateTravel() {
      return (isNaN(ServiceReport.data.travel * ServiceReport.data.travel_rate) ? 0 : ServiceReport.data.travel * ServiceReport.data.travel_rate);
    };
    function calculateMileage() {
      return (isNaN(ServiceReport.data.mileage * ServiceReport.data.mileage_rate) ? 0 : ServiceReport.data.mileage * ServiceReport.data.mileage_rate);
    };
    function calculateTax() {
      var tax = 0;
      angular.forEach(ServiceReport.data.parts, function(part, index) {
        tax += (part.quantity * part.price * ServiceReport.data.sales_tax * 0.01);
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
      angular.forEach(ServiceReport.data.parts, function(part, index) {
        sum += (part.quantity * part.price);
      });
      return (isNaN(sum) ? 0 : sum); 
    }; 
    function formatData(oldData) {
      oldData['invoice_attributes'] = oldData['invoice'];
      oldData['parts_attributes'] = oldData['parts'];
      oldData['hospital']['contact_attributes'] = 
        oldData['hospital']['contact'];
      oldData['hospital_attributes'] = oldData['hospital'];
      ServiceReport.data = oldData;
    }
    function formatParts() {
      ServiceReport.data['parts_attributes'] = ServiceReport.data.parts;
    }               
    function hasParts() {
      if (ServiceReport.data.parts_attributes[0].name === null) {
        return 'No';
      } else {
        return 'Yes';
      }
    }
    function haveParts() {
      if (ServiceReport.data.parts[0].name === null) {
        return 'No';
      } else {
        return 'Yes';
      }
    }    

    var ServiceReport = {
      data: data,
      setData: setData,
      formatData: formatData,
      formatParts: formatParts,
      setTotal: setTotal,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage,
      calculateTax: calculateTax,
      calculateTotal: calculateTotal,
      hasParts: hasParts
    };

    return ServiceReport;
  }); 
