class InvoiceCreator
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations

  def initialize(invoice)
    puts 'initialize'
    @invoice = invoice
    puts @invoice.inspect
  end

  def create
    puts 'create_invoice'
    puts self.inspect
    puts 'end create_invoice'
    invoice_format = InvoiceFormat.new(@invoice)
    service_report = ServiceReport.new(
      number: invoice_format.service_report_number,
      date: invoice_format.service_report_date,
      machine_make: invoice_format.machine_make,
      machine_model: invoice_format.machine_model,
      labor: invoice_format.labor,
      labor_rate: invoice_format.labor_rate,
      travel: invoice_format.travel,
      travel_rate: invoice_format.travel_rate,
      mileage: invoice_format.mileage,
      mileage_rate: invoice_format.mileage_rate,
      sales_tax: invoice_format.sales_tax          
    )


    @invoice['parts'].each_index do |index|
      service_report.parts.new(
        quantity: invoice_format.part_quantity(index),
        price: invoice_format.part_price(index),
        name: invoice_format.part_name(index),
        number: invoice_format.part_number(index)
      )
    end
    
    service_report.invoice = Invoice.new(
      number: invoice_format.number,
      date: invoice_format.date
    )
      # Hospital.find_or_create_by(name: ...)
    service_report.hospital = Hospital.new(
      name: invoice_format.hospital_name,
      department: invoice_format.hospital_department,
      room: invoice_format.hospital_room)
    service_report.hospital.contact = Contact.new(
      street: invoice_format.hospital_street,
      city: invoice_format.hospital_city,
      state: invoice_format.hospital_state,
      zipcode: invoice_format.hospital_zipcode)
    service_report.save
    service_report
  end
end
