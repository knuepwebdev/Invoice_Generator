angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(key, value, path) {
      path[key] = value;
      console.log('Invoice service');
      console.log(Invoice);
      console.log('*END Invoice service');
    };

    var Invoice = {
      setProperty: setProperty
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
