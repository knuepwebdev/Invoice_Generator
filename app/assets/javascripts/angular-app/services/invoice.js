                   // ng-change="getData('name',
                   //            invoice.datas.invoice.client.name,
                   //            invoice.datas.invoice.client)" />

angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(key, value, path) {
      console.log('setProperty');
      console.log('path: ' + path);
      console.log('key: ' + key);
      console.log('value: ' + value);
      // console.log(Object.getOwnPropertyNames(path));
      
      // key_invoice = Object.getOwnPropertyNames(data.datas)
      // console.log(Object.getOwnPropertyNames(data.datas[key]));
      // key_client = Object.getOwnPropertyNames(data.datas[key]);
      // var prop = attr;
      path[key] = value;
      console.log('Invoice service');
      console.log(Invoice);
      console.log('*END Invoice service');
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
