# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141021171223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: true do |t|
    t.string  "street"
    t.string  "city"
    t.string  "state"
    t.string  "zipcode"
    t.integer "hospital_id"
  end

  create_table "hospitals", force: true do |t|
    t.integer  "service_report_id"
    t.string   "name"
    t.string   "department"
    t.string   "room"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "invoices", force: true do |t|
    t.integer  "service_report_id"
    t.string   "number"
    t.date     "date"
    t.decimal  "total"
    t.integer  "number_of_pages"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "parts", force: true do |t|
    t.integer "service_report_id"
    t.string  "number"
    t.decimal "price"
    t.integer "quantity"
    t.string  "name"
  end

  create_table "service_reports", force: true do |t|
    t.string   "number"
    t.date     "date"
    t.string   "machine_make"
    t.string   "machine_model"
    t.integer  "labor"
    t.integer  "labor_rate"
    t.integer  "travel"
    t.integer  "travel_rate"
    t.integer  "mileage"
    t.integer  "mileage_rate"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
