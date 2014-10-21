class ServiceReport < ActiveRecord::Base
  has_one :invoice
  has_one :hospital
  has_many :parts
end
