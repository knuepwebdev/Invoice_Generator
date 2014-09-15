class InvoiceCreatorsController < ApplicationController
  def create
    invoice_creator = InvoiceCreator.new(invoice_params)  
    invoice_creator.create_invoice
    redirect_to invoices_path
  end

  private
  def invoice_params
    params.require(:invoice_creator).permit(:invoice_number)
  end
end