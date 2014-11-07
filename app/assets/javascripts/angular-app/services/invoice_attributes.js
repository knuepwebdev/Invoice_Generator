angular.module('invoice')
  .factory('invoiceAttributes', function() {
    var InvoiceAttrs = {
      client: {
        fields: [
          'department',
          'room'
        ],
        contact: [
          'street',
          'city'
        ]        
      }
    };

    return InvoiceAttrs;
  });
