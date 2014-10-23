// function setProperty(key, value, path) {
 // ng-change="getData({
 //            key: 'name',
 //            value: invoice.data.client.name,
 //            path: invoice.data.client })" />

angular.module('invoice')
  .factory('Invoice', function() {    
    function setProperty(data) {
      console.log('path: ' + data.path);
      console.log('key: ' + data.key);
      console.log('value: ' + data.value);

      // data.path[data.key] = data.value;
      // path[key] = value;
      console.log('Invoice service');
      console.log(Invoice);
      console.log('*END Invoice service');
    };

    var Invoice = {
      setProperty: setProperty,
      data: {
        parts: [{quantity: '', price: ''}]
      }
    };

    console.log('Invoice factory returning Invoice');
    console.log(Invoice);
    return Invoice;
  }); 
