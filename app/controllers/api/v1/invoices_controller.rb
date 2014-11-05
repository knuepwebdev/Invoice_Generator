module Api
  module V1
    class InvoicesController < ApplicationController
      respond_to :json

      def index
        service_reports = all_service_reports
        respond_to do |format|
          format.json { render json: service_reports.as_json(include: [:invoice, {hospital: {include: :contact}}, :parts]) }
        end
      end 

      def create
        invoice_creator = InvoiceCreator.new(invoice_creator_params)
        service_report = invoice_creator.create
        respond_to do |format|
          format.json { render json: service_report.as_json(include: [:invoice, {hospital: {include: :contact}}, :parts]) }
        end
      end

      def destroy
        ServiceReport.find(params[:id]).destroy
        service_reports = all_service_reports
        respond_to do |format|
          format.json { render json: service_reports.as_json(include: [:invoice, {hospital: {include: :contact}}, :parts]) }
        end
      end

      private
      def all_service_reports
        ServiceReport.includes(:invoice, {hospital: :contact}, :parts)
      end

      def invoice_creator_params
        params.require(:data).permit(
          :number,
          :date,
          :total,
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
          serviceReport: [
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
            :sales_tax,
            parts: [:quantity, :price, :number, :name]                        
          ]
        )
      end 
    end
  end
end
