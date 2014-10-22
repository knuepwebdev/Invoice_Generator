class ServiceReport < ActiveRecord::Base
  has_one :invoice
  has_one :hospital
  has_many :parts
  validates_presence_of :number, :date, :machine_make, :machine_model
  validates_length_of :number, is: 4
end
