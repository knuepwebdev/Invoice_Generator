NrsInvoices::Application.routes.draw do
  resources :invoices, only: [:new]
end
