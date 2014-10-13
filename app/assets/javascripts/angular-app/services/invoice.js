angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(attr, data) {
      var prop = attr;
      
      if (Invoice.datas.invoice.hasOwnProperty(prop)) {
        Invoice.datas.invoice[prop] = data; 
        console.log(Invoice.datas);
      } else {
        Invoice.datas.invoice[prop] = data;
        console.log(Invoice.datas);
      }
    };

    var Invoice = {
      setProperty: setProperty,
      datas: {
        invoice: {}
      }
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
