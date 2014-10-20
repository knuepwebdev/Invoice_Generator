class ServiceReport < ActiveRecord::Base
  has_one :invoice
  has_one :hospital
end
