class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.belongs_to :service_report
      t.string :number
      t.decimal :price
      t.integer :quantity
      t.string :name
    end
  end
end
