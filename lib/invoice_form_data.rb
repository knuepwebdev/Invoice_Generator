module InvoiceFormData
  INVOICE_FORM_FIELDS = {
    invoice_data: [
      {field_name: 'invoice_number', width: '2'},
      {field_name: 'invoice_date', width: '2'}
    ],    
    hospital: [
      {field_name: 'hospital_name', width: '4'},
      {field_name: 'hospital_street', width: '4'},
      {field_name: 'hospital_city', width: '4'},
      {field_name: 'hospital_state', width: '2'},
      {field_name: 'hospital_zipcode', width: '2'}
    ],
    service_report: [
      {field_name: 'service_report_number', width: '2'},
      {field_name: 'service_report_date', width: '2'},
      {field_name: 'x_ray_machine_make', width: '4'},
      {field_name: 'x_ray_machine_model', width: '4'},
      {field_name: 'labor', width: '1'},
      {field_name: 'travel', width: '1'}
    ]
  }
end
