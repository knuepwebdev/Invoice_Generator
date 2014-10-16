class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :zipcode
      t.references :hospital
    end
  end
end
