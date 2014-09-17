class Invoice < ActiveRecord::Base
  belongs_to :service_report  
end
