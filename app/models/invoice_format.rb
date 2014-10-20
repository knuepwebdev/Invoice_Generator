class InvoiceFormat
  def initialize(invoice_format)
    @invoice_format = invoice_format
  end
  def number
    @invoice_format['number']
  end
  def date
    @invoice_format['date']
  end
  def hospital_name
    @invoice_format['client']['name']
  end
  def hospital_department
    @invoice_format['client']['hospital_department']
  end
  def hospital_room
    @invoice_format['client']['hospital_room']
  end
  def hospital_street
    @invoice_format['client']['contact']['street']
  end
  def hospital_city
    @invoice_format['client']['contact']['city']
  end
  def hospital_state
    @invoice_format['client']['contact']['state']['abbreviation']
  end
  def hospital_zipcode
    @invoice_format['client']['contact']['zipcode']
  end
  def service_report_number
    @invoice_format['service_report']['number']
  end
  def service_report_date
    @invoice_format['service_report']['date']
  end
  def machine_make
    @invoice_format['service_report']['machine_make']
  end
  def machine_model
    @invoice_format['service_report']['machine_model']
  end
    def labor
    @invoice_format['service_report']['labor']
  end
    def labor_rate
    @invoice_format['service_report']['labor_rate']
  end             
end
