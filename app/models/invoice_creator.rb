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
    hospital = Hospital.new(
      name: invoice_format.hospital_name,
      department: invoice_format.hospital_department,
      room: invoice_format.hospital_room)
    hospital.build_contact(
      street: invoice_format.hospital_street,
      city: invoice_format.hospital_city,
      state: invoice_format.hospital_state,
      zipcode: invoice_format.hospital_zipcode)
    hospital.save
  end
end
