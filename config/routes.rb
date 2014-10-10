NrsInvoices::Application.routes.draw do
  namespace :api, defaults: { format: :json } do
    
  end

  root 'application#index'
  get '*path' => 'application#index'
end
