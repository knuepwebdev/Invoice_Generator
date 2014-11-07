class Hospital < ActiveRecord::Base
  has_one :contact, dependent: :destroy
  accepts_nested_attributes_for :contact
  belongs_to :service_report
  validates_presence_of :name, :department, :room
end
