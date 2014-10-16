angular.module('invoice')
  .factory('invoiceAttributes', function() {
    var InvoiceAttrs = {
      client: {
        fields: [
          'hospital_department',
          'hospital_room'
        ],
        contact: [
          'street',
          'city'
        ]        
      }
    };

    return InvoiceAttrs;
  });
