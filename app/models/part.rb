class Part < ActiveRecord::Base
  belongs_to :service_report
  validates_presence_of :number, :price, :quantity, :name
end
