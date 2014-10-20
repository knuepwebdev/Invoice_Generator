class CreateServiceReports < ActiveRecord::Migration
  def change
    create_table :service_reports do |t|
      t.string :number
      t.date :date
      t.string :machine_make
      t.string :machine_model
      t.integer :labor
      t.integer :labor_rate
      t.integer :travel
      t.integer :travel_rate
      t.integer :mileage
      t.integer :mileage_rate            
      t.timestamps
    end
  end
end
