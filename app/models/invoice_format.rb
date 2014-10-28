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
  def total
    @invoice_format['total']
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
    @invoice_format['serviceReport']['number']
  end
  def service_report_date
    @invoice_format['serviceReport']['date']
  end
  def machine_make
    @invoice_format['serviceReport']['machine_make']
  end
  def machine_model
    @invoice_format['serviceReport']['machine_model']
  end
  def labor
    @invoice_format['serviceReport']['labor']
  end
  def labor_rate
    @invoice_format['serviceReport']['labor_rate']
  end
  def travel
    @invoice_format['serviceReport']['travel']
  end
  def travel_rate
    @invoice_format['serviceReport']['travel_rate']
  end
  def mileage
    @invoice_format['serviceReport']['mileage']
  end
  def mileage_rate
    @invoice_format['serviceReport']['mileage_rate']
  end                
  def part_quantity(index)
    @invoice_format['serviceReport']['parts'][index]['quantity']
  end
  def part_price(index)
    @invoice_format['serviceReport']['parts'][index]['price']
  end
  def part_name(index)
    @invoice_format['serviceReport']['parts'][index]['name']
  end
  def part_number(index)
    @invoice_format['serviceReport']['parts'][index]['number']
  end     
  def sales_tax
    @invoice_format['serviceReport']['sales_tax']
  end    
end
