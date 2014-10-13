class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.belongs_to :service_report
      t.string :name
      t.string :street
      t.string :city
      t.date :date
      t.decimal :total
      t.timestamps
    end
  end
end
