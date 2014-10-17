class Hospital < ActiveRecord::Base
  has_one :contact
  validates_presence_of :name, :department, :room
end
