angular.module('invoice')
  .value('formData', {
    clientData: [
      {name: 'client_name', width: 8},
      {name: 'street', width: 8},
      {name: 'city', width: 8}
    ]
  });
