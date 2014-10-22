class Invoice < ActiveRecord::Base
  belongs_to :service_report  
  validates_presence_of :number, :date
  validates_length_of :number, is: 4
end
