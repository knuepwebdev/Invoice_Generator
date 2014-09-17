class CreateServiceReports < ActiveRecord::Migration
  def change
    create_table :service_reports do |t|
      t.string :number
      t.date :service_date

      t.timestamps
    end
  end
end
