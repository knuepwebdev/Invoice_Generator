module InvoiceFormData
  COMPANY = {
    name: 'National Radiographic Systems, Inc',
    tagline: 'X-Ray Sales and Service',
    street: '414 W Sycamore Ave',
    city: 'El Segundo',
    state: 'CA',
    zip_code: '90245',
    phone: '310-322-7796',
    fax: '310-322-9638'
  }

  CLIENT_DATA = [
    {field_name: 'client_name', width: '4'},
    {field_name: 'client_street', width: '4'},
    {field_name: 'client_city_state_zip', width: '4'}
  ]

  INVOICE_FORM_FIELDS = {
    pages: 1, width: '2',
  }

  RIGHT_COLUMN = [
    {id: 'po-number', heading: 'Your Purchase Order'},
    {id: 'date', heading: 'Date'},
    {id: 'terms', heading: 'Terms of Payment: 30 Days Net'},
    {id: 'reference-number', heading: 'Our Reference Number'}

  ]

  EXTRA_FIELDS = [
    {id: 'fob-point', heading: 'f.o.b. point'},
    {id: 'carriers-name', heading: "Carrier's name"},
    {id: 'shipped-via', heading: 'shipped via'},
    {id: 'freight-term', heading: 'freight term'},
    {id: 'st-tax', heading: 'st. tax for'},
    {id: 'pco', heading: 'pco'},
    {id: 'tax-determination', heading: 'tax determination'},
  ]

  SERVICE_REPORT = [
    {field_name: 'number', width: '4'},
    {field_name: 'date', width: '4'},
    {field_name: 'machine_make', width: '4'},
    {field_name: 'machine_model', width: '4'}
  ]
    

  # INVOICE_FORM_FIELDS = [
  #   {field_name: 'invoice_number', width: '2'},
  #   {field_name: 'invoice_date', width: '2'},
  #   {field_name: 'pages', width: '2'},
  #   {field_name: 'service_report_number', width: '2'},
  #   {field_name: 'service_report_date', width: '2'},
  #   {field_name: 'x_ray_machine_make', width: '4'},
  #   {field_name: 'x_ray_machine_model', width: '4'},
  #   {field_name: 'labor', width: '1'},
  #   {field_name: 'travel', width: '1'}
  # ]
  
end
