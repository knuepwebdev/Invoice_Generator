class Hospital < ActiveRecord::Base
  has_one :contact
  belongs_to :service_report
  validates_presence_of :name, :department, :room
end
