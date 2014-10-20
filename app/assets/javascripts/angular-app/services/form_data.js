angular.module('invoice')
  .value('formData', {
    clientData: [
      {name: 'client_name', width: 8},
      {name: 'street', width: 8},
      {name: 'city', width: 8}
    ], 
    company: {
      name: 'National Radiographic Systems, Inc',
      tagline: 'X-Ray Sales and Service',
      street: '414 W Sycamore Ave',
      city: 'El Segundo',
      state: 'CA',
      zip_code: '90245',
      phone: '310-322-7796',
      fax: '310-322-9638'
    },
    rightColumn: [
      {id: 'po-number', heading: 'Your Purchase Order'},
      {id: 'date', heading: 'Date'},
      {id: 'terms', heading: 'Terms of Payment: 30 Days Net'},
      {id: 'reference-number', heading: 'Our Reference Number'}
    ],
    numberOfPages: '1',
    extraFields: [
      {id: 'fob-point', heading: 'f.o.b. point'},
      {id: 'carriers-name', heading: "Carrier's name"},
      {id: 'shipped-via', heading: 'shipped via'},
      {id: 'freight-term', heading: 'freight term'},
      {id: 'st-tax', heading: 'st. tax for'},
      {id: 'pco', heading: 'pco'},
      {id: 'tax-determination', heading: 'tax determination'}
    ],
    description: {
      service_report: [
        {field: 'service_report_number'},
        {field: 'service_report_date'}  
      ],
      machine: [
        {field: 'machine_make'},
        {field: 'machine_model'}  
      ],
      labor: [
        {field: 'labor'},
        {field: 'labor_hourly_rate'}  
      ]
    },
    travel: [
      {field: 'travel'},
      {field: 'travel_rate'}
    ],
    mileage: [
      {field: 'mileage'},
      {field: 'mileage_rate'}
    ]      
  });
