class Contact < ActiveRecord::Base
  belongs_to :hospital
  validates_presence_of :street, :city, :state, :zipcode
  validates_length_of :state, is: 2
  validates_length_of :zipcode, minimum: 5
end
