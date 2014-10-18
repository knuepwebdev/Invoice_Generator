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
end
