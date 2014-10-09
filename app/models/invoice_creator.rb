class InvoiceCreator
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  attr_reader :invoice_number, :invoice_date, :client_name, :street, :city, :state, :zipcode, :hospital_department, :hospital_room, :service_report_number, :service_report_date, :machine_make, :machine_model, :labor, :labor_hourly_rate, :travel, :travel_hourly_rate, :mileage, :mileage_rate, :part

  def initialize(hash)
    hash.each do |key, value|
      instance_variable_set("@#{key}", value)
      self.class.send(:define_method, key.to_sym) do
        # return the value of the instance variable
        instance_variable_get("@#{key}")
      end
    end
  end

  def create_invoice
    invoice = Invoice.new(number: invoice_number)
    invoice.service_report = ServiceReport.create(number: '11')
    invoice.save
  end
end
