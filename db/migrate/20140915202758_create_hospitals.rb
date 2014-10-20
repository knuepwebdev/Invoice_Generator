class CreateHospitals < ActiveRecord::Migration
  def change
    create_table :hospitals do |t|
      t.belongs_to :service_report
      t.string :name
      t.string :department
      t.string :room

      t.timestamps
    end
  end
end
