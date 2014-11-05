class ServiceReport < ActiveRecord::Base
  has_one :invoice, dependent: :destroy
  has_one :hospital, dependent: :destroy
  has_many :parts, dependent: :destroy
  validates_presence_of :number, :date, :machine_make, :machine_model
  validates_length_of :number, is: 4
end
