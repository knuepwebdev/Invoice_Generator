class InvoiceCreator
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  attr_reader :invoice_number, :invoice_date, :service_report_number, :service_report_date

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
    Invoice.create(
      number: invoice_number
    )
  end
end