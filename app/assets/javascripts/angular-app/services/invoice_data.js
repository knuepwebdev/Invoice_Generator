angular.module('invoice')
  .factory('invoiceAttributes', function() {
    var InvoiceAttrs = {
      client: [
        'name',
        'street',
        'city'
      ]        
    };

    return InvoiceAttrs;
  }); 
