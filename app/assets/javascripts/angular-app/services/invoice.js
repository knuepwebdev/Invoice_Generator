angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(attr, data) {
      var prop = attr;
      
      if (Invoice.hasOwnProperty(prop)) {
        Invoice[prop] = data; 
      } else {
        Object.defineProperty(Invoice, prop, {
          value: data,
          writable: true
        });
      }
    };

    var Invoice = {
      setProperty: setProperty
    };

    return Invoice;
  }); 
