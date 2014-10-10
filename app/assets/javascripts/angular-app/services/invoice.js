angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(attr, data) {
      var prop = attr;
      Invoice.datas.invoice.client[prop] = data; 
      console.log(Invoice.datas);
    };

    var Invoice = {
      setProperty: setProperty,
      datas: {
        invoice: {
          client: {
            name: '', 
            street: '',
            city: '',
            state: '',
            zipcode: ''
          }
        }
      }
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
