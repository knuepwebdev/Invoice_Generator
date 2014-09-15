NrsInvoices::Application.routes.draw do
  resources :invoices, only: [:new, :index]
  resource :invoice_creator, only: [:create]
end
