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
        service_report = ServiceReport.create(service_report_params)
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
      def update
        service_report = ServiceReport.find(params[:id])
        service_report.update_attributes(service_report_params)
        respond_to do |format|
          format.json { render json: service_report.as_json(include: [:invoice, {hospital: {include: :contact}}, :parts]) }
        end        
      end

      private
      def all_service_reports
        ServiceReport.includes(:invoice, {hospital: :contact}, :parts)
      end

      def service_report_params
        params.permit(
          :id, :number, :date, :machine_make, :machine_model, :labor, :labor_rate, :travel, :travel_rate, :mileage, :mileage_rate, :sales_tax, :created_at, :updated_at,
          invoice_attributes: [
            :id, :service_report_id, :number, :date, :total, :number_of_pages
          ],
          hospital_attributes: [
            :id, :name, :department, :room,
            contact_attributes: [
              :id, :street, :city, :state, :zipcode
            ]
          ], 
          parts_attributes: [
            :id, :number, :price, :quantity, :name
          ]
        )
      end
    end
  end
end
