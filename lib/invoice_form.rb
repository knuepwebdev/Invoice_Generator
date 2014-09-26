module InvoiceForm
  CLIENT_DATA = [
    {field_name: 'client_name', width: '4'},
    {field_name: 'client_street', width: '4'},
    {field_name: 'client_city_state_zip', width: '4'}
  ]

  INVOICE_FORM_FIELDS = [
    {field_name: 'invoice_number', width: '2'},
    {field_name: 'invoice_date', width: '2'},
    
    {field_name: 'service_report_number', width: '2'},
    {field_name: 'service_report_date', width: '2'},
    {field_name: 'x_ray_machine_make', width: '4'},
    {field_name: 'x_ray_machine_model', width: '4'},
    {field_name: 'labor', width: '1'},
    {field_name: 'travel', width: '1'}
  ]
  
end

