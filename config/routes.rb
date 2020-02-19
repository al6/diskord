Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'
  namespace :api, defaults: {format: :json} do
    resources :members, only: [:create]
    resource :session, only: [:create, :destroy]
    post '/guild_memberships/:name', to: 'guild_memberships#join_guild', as: 'guild_membership'
    resources :guilds, only: [:index, :create, :destroy] do
      get :channels, on: :member
      get :members, on: :member
    end
    resources :guild_memberships, only: [:show, :create, :destroy] do
      get :guild_members, on: :member
    end
    resources :channels, only: [:create, :index, :destroy] do
      get :messages, on: :member
    end
    resources :messages, only: [:index, :create, :destroy]
  end
  root to: 'static_pages#root'
end
