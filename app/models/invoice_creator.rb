class InvoiceCreator
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  # attr_reader :invoice_number, :invoice_date, :client_name, :street, :city, :state, :zipcode, :hospital_department, :hospital_room, :service_report_number, :service_report_date, :machine_make, :machine_model, :labor, :labor_hourly_rate, :travel, :travel_hourly_rate, :mileage, :mileage_rate, :part

  def initialize(hash)
    puts 'initialize'
    puts hash.inspect
    hash.each do |key, value|
      instance_variable_set("@#{key}", value)
      self.class.send(:define_method, key.to_sym) do
        # return the value of the instance variable
        instance_variable_get("@#{key}")
      end

    end
  end

  def create
    puts 'create_invoice'
    puts self.inspect
    puts 'end create_invoice'
    hospital = Hospital.new(
      name: @client['name'],
      department: @client['department'],
      room: @client['room']
    )
    hospital.build_contact(
      street: @client['contact']['street'],
      city: @client['contact']['city'],
      state: @client['contact']['state']['abbreviation'],
      zipcode: @client['contact']['zipcode']
    )
    hospital.save
  end
end
