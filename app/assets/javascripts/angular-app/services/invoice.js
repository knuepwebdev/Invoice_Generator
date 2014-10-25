angular.module('invoice')
  .factory('Invoice', function() {    


    var data = { parts: [{quantity: '', price: ''}] }

    function setServiceReport(serviceReport) {
      console.log('***setServiceReport')
      data = {};
      data.service_report = serviceReport;
      console.log(data);
      console.log('****end setData');
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

    var Invoice = {
      setServiceReport: setServiceReport,
      data: data,
      calculateLabor: calculateLabor,
      calculateTravel: calculateTravel,
      calculateMileage: calculateMileage
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
