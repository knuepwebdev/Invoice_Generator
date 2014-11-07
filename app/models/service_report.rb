class ServiceReport < ActiveRecord::Base
  has_one :invoice, dependent: :destroy
  has_one :hospital, dependent: :destroy
  has_many :parts, dependent: :destroy
  accepts_nested_attributes_for :invoice
  accepts_nested_attributes_for :hospital
  accepts_nested_attributes_for :parts
  validates_presence_of :number, :date, :machine_make, :machine_model
  validates_length_of :number, is: 4
end
