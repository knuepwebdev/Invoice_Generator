class InvoicesController < ApplicationController
  def new
    @invoice_creator = InvoiceCreator.new({})
  end

  def index
      #Use eager loading
    @invoices = Invoice.all
  end
end