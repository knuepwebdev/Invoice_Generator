module Api
  module V1
    class InvoicesController < ApplicationController
      respond_to :json

      def index
        respond_with Invoice.all
      end 

      def create
        invoice = Invoice.create(invoice_params)
        respond_with :api, :v1, invoice
      end

      private
      def invoice_params
        params.require(:invoice).permit(:number)
      end 
    end
  end
end
