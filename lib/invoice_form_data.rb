module InvoiceFormData
  INVOICE_FORM_FIELDS = {
    invoice_data: [
      {field_name: 'invoice_number', width: '2'},
    ],    
    hospital: [
      {field_name: 'hospital_name', width: '4'},
      {field_name: 'hospital_street', width: '4'},
      {field_name: 'hospital_city', width: '4'},
      {field_name: 'hospital_state', width: '2'},
      {field_name: 'hospital_zipcode', width: '2'}
    ]
  }
end
