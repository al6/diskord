Rails.application.routes.draw do
  namespace :api do
    resources :members, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
