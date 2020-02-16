Rails.application.routes.draw do
  namespace :api do
    get 'channels/create'
  end
  get 'channels/create'
  namespace :api, defaults: {format: :json} do
    resources :members, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :guilds, only: [:index, :create, :destroy] do
      get :channels, on: :member
      get :members, on: :member
    end
    resources :guild_memberships, only: [:show, :create, :destroy]
    resources :channels, only: [:create, :index, :destroy]
    resources :messages, only: [:index, :create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
