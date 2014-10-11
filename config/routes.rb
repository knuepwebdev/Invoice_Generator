NrsInvoices::Application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :invoices, only: [:index]
    end
  end

  root 'application#index'
  get '*path' => 'application#index'
end
