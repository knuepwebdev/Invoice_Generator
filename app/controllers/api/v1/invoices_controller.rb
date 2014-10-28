module Api
  module V1
    class InvoicesController < ApplicationController
      respond_to :json

      def index
        service_reports = ServiceReport.all
        respond_to do |format|
          format.json { render json: service_reports.as_json(include: [:invoice, {hospital: {include: :contact}}, :parts]) }
        end
      end 

      def create
        invoice_creator = InvoiceCreator.new(invoice_creator_params)
        service_report = invoice_creator.create
        respond_to do |format|
          format.json { render json: service_report.to_json(include: [:invoice, :hospital, :parts]) }
        end
      end

      private
      def invoice_creator_params
        params.require(:data).permit(
          :number,
          :date,
          client: [
            :name,
            :hospital_room,
            :hospital_department,
            contact: [
              :street,
              :city,
              :zipcode,
              state: [
                :abbreviation,
                :name
              ]
            ]
          ],
          service_report: [
            :number,
            :date,
            :machine_make,
            :machine_model,
            :labor,
            :labor_rate,
            :travel,
            :travel_rate,
            :mileage,
            :mileage_rate,
            :sales_tax                        
          ],
          parts: [:quantity, :price, :number, :name]
        )
      end 
    end
  end
end
