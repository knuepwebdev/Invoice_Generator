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

    var Invoice = {
      setServiceReport: setServiceReport,
      data: data,
      calculateLabor: calculateLabor 
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
