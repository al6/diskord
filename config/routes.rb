Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :members, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :guilds, only: [:index, :create, :destroy]
    resources :guild_memberships, only: [:index, :create, :destroy]
    resources :channels, only: [:get, :post, :delete]
    resources :messages, only: [:index, :create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
