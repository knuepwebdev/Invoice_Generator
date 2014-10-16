module Api
  module V1
    class InvoicesController < ApplicationController
      respond_to :json

      def index
        respond_with Invoice.all
      end 

      def create
        invoice_creator = InvoiceCreator.new(invoice_creator_params)
        invoice_creator.create
          #Create an invoice
        invoice = Invoice.new
        respond_with :api, :v1, invoice
      end

      private
      def invoice_creator_params
        params.require(:invoice).permit(
          client: [
            :name,
            contact: [
              :street,
              :city,
              :zipcode,
              state: [
                :abbreviation,
                :name
              ]
            ]
          ]
        )
      end 
    end
  end
end
