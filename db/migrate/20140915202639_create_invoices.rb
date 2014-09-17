class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.belongs_to :service_report
      t.string :number
      t.date :date
      t.decimal :total
      t.timestamps
    end
  end
end
