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
      t.decimal :mileage_rate            
      t.decimal :sales_tax
      t.timestamps
    end
  end
end
