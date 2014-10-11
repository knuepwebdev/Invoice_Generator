module Api
  module V1
    class InvoicesController < ApplicationController
      respond_to :json

      def new

      end

      def index
        respond_with Invoice.all
      end 
    end
  end
end
