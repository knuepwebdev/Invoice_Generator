class InvoiceCreator
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  attr_reader :invoice_number, :invoice_date, :client_name, :client_street, :client_city_state_zip, :shipping_data, :service_report_number, :service_report_date, :x_ray_machine_make, :x_ray_machine_model, :labor, :hourly_rate

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
