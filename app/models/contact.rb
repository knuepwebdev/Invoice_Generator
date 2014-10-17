class Contact < ActiveRecord::Base
  belongs_to :hospital
  validates_presence_of :street, :city, :state, :zipcode
end
